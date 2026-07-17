'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [allPosts, setAllPosts] = useState([]);

  // جلب البيانات تلقائياً من الـ API عند تحميل الصفحة
  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setAllPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 30px', 
        background: 'linear-gradient(135deg, #0f172a, #1e3a8a)', 
        color: '#ffffff',
        width: '100%',
        height: '70px',
        boxSizing: 'border-box'
      }}>
        
        <Link href="/">
          <img src="/Logo.png" alt="Logo" style={{ height: '75px', width: 'auto', display: 'block' }} />
        </Link>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
          <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
          
          <button 
            onClick={() => setShowSearch(!showSearch)}
            style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: '24px' }}
            aria-label="Search"
          >
            🔍
          </button>
        </div>
      </nav>

      {/* مربع البحث التلقائي */}
      {showSearch && (
        <div style={{ 
          position: 'absolute', 
          top: '70px', 
          left: 0, 
          width: '100%', 
          padding: '15px', 
          background: '#1e3a8a', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          zIndex: 1000
        }}>
          <input 
            type="text" 
            placeholder="ابحث في المقالات..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '10px', width: '90%', maxWidth: '500px', borderRadius: '5px', border: 'none' }} 
            autoFocus
          />
          
          {/* عرض نتائج البحث */}
          {searchTerm && (
            <div style={{ marginTop: '10px', width: '90%', maxWidth: '500px' }}>
              {allPosts
                .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((p, i) => (
                  <Link 
                    key={i} 
                    href={p.url} 
                    onClick={() => setShowSearch(false)}
                    style={{ display: 'block', padding: '10px', color: '#fff', borderBottom: '1px solid #ffffff33', textDecoration: 'none' }}
                  >
                    {p.title}
                  </Link>
                ))
              }
            </div>
          )}
        </div>
      )}
    </>
  );
}
