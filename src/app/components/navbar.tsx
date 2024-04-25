'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollIsZero, setScrollIsZero] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollIsZero(window.scrollY === 0);
    });
  });
  return (
    <nav
      className={`navbar ${scrollIsZero ? 'is-transparent' : 'is-primary'} is-fixed-top ${
        isOpen ? 'is-mobile-open' : ''
      }`}
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='#'>
            <Image src='/images/android-chrome-512x512.png' alt='' width={30} height={30} />
          </a>

          <a
            role='button'
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => setIsOpen(!isOpen)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className='navbar-start' onClick={() => setIsOpen(false)}>
            <div className='navbar-item'>
              <a className='button is-primary' href='#'>
                Home
              </a>
            </div>
            <div className='navbar-item'>
              <a className='button is-primary' href='#about'>
                About me
              </a>
            </div>
            <div className='navbar-item'>
              <a className='button is-primary' href='#github'>
                Github projects
              </a>
            </div>
            <div className='navbar-item'>
              <a className='button is-primary' href='#blog'>
                Blog posts
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
