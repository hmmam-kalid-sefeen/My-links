import https from 'https';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'الرجاء تزويد الرابط' });
  }

  // استخدام بروكشي مجاني لتخطي حماية أمازون وقراءة محتوى الـ HTML
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

  https.get(proxyUrl, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      try {
        const json = JSON.parse(data);
        const html = json.contents || '';

        // 1. استخراج عنوان المنتج
        const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
        let title = titleMatch ? titleMatch[1].trim() : "منتج متميز";
        
        const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
        if (ogTitleMatch) title = ogTitleMatch[1].trim();

        // 2. استخراج الصورة الحقيقية للمنتج (دعم أمازون والمواقع الأخرى)
        const imageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i) ||
                           html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*property=["']og:image["']/i) ||
                           html.match(/<img[^>]*id=["']landingImage["'][^>]*src=["']([^"']*)["']/i);
        let image = imageMatch ? imageMatch[1] : '';

        // 3. استخراج وصف المنتج الحقيقي
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                          html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
        let desc = descMatch ? descMatch[1].trim() : '';

        // تنظيف العنوان من اللاحقات التلقائية لأمازون لمظهر أفضل
        title = title.replace('Amazon.com: ', '').replace(': Electronics', '').replace(': Books', '');

        return res.status(200).json({
          title: title,
          image: image,
          desc: desc,
          url: url
        });
      } catch (e) {
        return res.status(200).json({ title: "رابط منتج", image: "", desc: "", url: url });
      }
    });
  }).on('error', () => {
    return res.status(200).json({ title: "رابط منتج", image: "", desc: "", url: url });
  });
}
