export default async function handler(req, res) {
  // السماح للموقع بطلب البيانات (تجنب مشكلة CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // التأكد من أن المستخدم أرسل رابطاً في الطلب
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'الرجاء تزويد رابط المنتج (url)' });
  }

  try {
    // جلب محتوى صفحة المنتج
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error('فشل في جلب الصفحة');
    }

    const html = await response.text();

    // استخراج عنوان الصفحة (Title) باستخدام التعبيرات النمطية (Regex)
    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    let title = titleMatch ? titleMatch[1].trim() : 'منتج بدون عنوان';

    // محاولة استخراج صورة المنتج من وسوم Open Graph (og:image) المشهورة
    const imageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i) || 
                       html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["']/i);
    let image = imageMatch ? imageMatch[1] : '';

    // إذا لم يجد og:title، نستخدم العنوان العادي الذي وجدناه فوق
    const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
    if (ogTitleMatch) title = ogTitleMatch[1].trim();

    // إرسال البيانات المستخرجة إلى موقعك
    return res.status(200).json({
      title: title,
      image: image,
      url: url
    });

  } catch (error) {
    return res.status(500).json({ error: 'حدث خطأ أثناء جلب معلومات المنتج', details: error.message });
  }
}
