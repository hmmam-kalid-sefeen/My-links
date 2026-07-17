'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

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
            {/* أيقونة البحث SVG مباشرة */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </nav>

      {showSearch && (
        <div style={{ 
          position: 'absolute', top: '70px', left: 0, width: '100%', padding: '15px', 
          background: '#1e3a8a', display: 'flex', justifyContent: 'center', boxSizing: 'border-box' 
        }}>
          <input 
            type="text" 
            placeholder="البحث في الموقع..." 
            style={{ padding: '10px', width: '90%', maxWidth: '500px', borderRadius: '5px', border: 'none' }} 
            autoFocus
          />
        </div>
      )}
    </>
  );
}
