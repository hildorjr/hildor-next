import ShapeDivider from './shape-divider';

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/hildor/?locale=en_US',
      label: 'Connect on LinkedIn',
      icon: 'fab fa-linkedin-in',
      text: 'LinkedIn',
    },
    { href: 'https://blog.hildor.dev', label: 'Browse blog posts', icon: 'fa fa-rss-square', text: 'Blog' },
    {
      href: 'https://github.com/hildorjr',
      label: 'Follow on Github',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
  ];

  return (
    <footer className='footer'>
      <ShapeDivider />
      <div className='container has-text-centered'>
        <p className='mb-6'>
          Made with <i className='fas fa-heart has-text-danger op-1'></i> by Hildor
        </p>
        <div className='footer-links'>
          {socialLinks.map((link) => (
            <a key={link.text} aria-label={link.label} target='_blank' href={link.href} rel='noreferrer'>
              <span className='icon'>
                <i className={link.icon}></i>
              </span>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
