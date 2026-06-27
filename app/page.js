  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // إضافة حماية: التأكد من وجود data قبل محاولة الوصول لـ article_metadata
    const meta = data?.article_metadata || data || {};
    
    return {
      title: meta?.title || "عنوان المقالة",
      image: meta?.image || "/default-image.jpg",
      slug: meta?.slug || filename.replace('.json', ''),
    };
  });
