// تأكد من استخدام هذا المنطق في ملف الـ page.js الخاص بالتصنيفات
const posts = filenames.map(filename => {
  const fileContents = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
  const data = JSON.parse(fileContents);
  
  // استخراج البيانات من article_metadata إذا وجدت، وإلا خذ البيانات مباشرة
  const meta = data.article_metadata || data;
  
  return { 
    ...meta, 
    filename 
  };
}).filter(post => {
  // مقارنة آمنة: تحويل الكل لأحرف صغيرة وإزالة المسافات
  const postCategory = post.category?.toLowerCase().replace(/\s+/g, '-');
  return postCategory === slug.toLowerCase();
});
