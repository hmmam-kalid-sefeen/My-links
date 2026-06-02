import https from 'https';

export default function handler(req, res) {
  // السماح بالوصول وتجنب قيود CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'الرجاء تزويد رابط المنتج' });
  }

  // استخدام مكتبة https الأساسية لضمان التوافق التام على السيرفر
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
    }
  }, (response) => {
    let data = '';

    // تجميع نص الصفحة (HTML)
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      // 1. استخراج عنوان الصفحة
      const titleMatch = data.match(/<title>([^<]*)<\/title>/i);
      let title = titleMatch ? titleMatch[1].trim() : '';

      // 2. محاولة استخراج العنوان من og:title إذا توفر
      const ogTitleMatch = data.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
      if (ogTitleMatch) title = ogTitleMatch[1].trim();

      // 3. استخراج صورة المنتج من og:image
      const imageMatch = data.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i) ||
                         data.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["']/i);
      let image = imageMatch ? imageMatch[1] : '';

      // إذا فشل في جلب اسم معين، نضع اسم النطاق كعنوان احتياطي
      if (!title) {
        try {
          title = new URL(url).hostname;
        } catch {
          title = "رابط مخصص";
        }
      }

      return res.status(200).json({
        title: title,
        image: image,
        url: url
      });
    });

  }).on('error', (err) => {
    // في حال حدوث أي خطأ أو حظر من الموقع (مثل حماية أمازون القوية)
    let fallbackTitle = "رابط مخصص";
    try { fallbackTitle = new URL(url).hostname; } catch {}
    
    return res.status(200).json({
      title: fallbackTitle,
      image: '',
      url: url
    });
  });
}
