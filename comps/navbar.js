'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

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
        
        {/* اللوجو */}
        <Link href="/">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            style={{ height: '75px', width: 'auto', display: 'block' }} 
          />
        </Link>

        {/* الروابط وأيقونة البحث */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none' }}>About</Link>
          <Link href="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
          
          <button 
            onClick={() => setShowSearch(!showSearch)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: '#ffffff', 
              cursor: 'pointer', 
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center'
            }}
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </nav>

      {/* مربع البحث المنبثق */}
      {showSearch && (
        <div style={{ 
          position: 'absolute', 
          top: '70px', 
          left: 0, 
          width: '100%', 
          padding: '15px', 
          background: '#1e3a8a', 
          display: 'flex', 
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>
          <input 
            type="text" 
            placeholder="Search..." 
            style={{ 
              padding: '10px', 
              width: '90%', 
              maxWidth: '500px', 
              borderRadius: '5px', 
              border: 'none' 
            }} 
          />
        </div>
      )}
    </>
  );
}
