'use client';

import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar is-primary is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='#'>
          Hildor
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
          <a className='navbar-item' href='#'>
            Home
          </a>
          <a className='navbar-item' href='#about'>
            About me
          </a>
          <a className='navbar-item' href='#github'>
            Github projects
          </a>
          <a className='navbar-item' href='#blog'>
            Blog posts
          </a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <a
                className='button is-primary is-inverted'
                target='_blank'
                href='https://www.linkedin.com/in/hildor/?locale=en_US'
              >
                <span className='icon'>
                  <i className='fab fa-linkedin-in'></i>
                </span>
                <strong>Connect</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
