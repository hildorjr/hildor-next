import ShapeDivider from './shape-divider';

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://youtube.com/@hildordev',
      label: 'Watch on YouTube',
      icon: 'fab fa-youtube',
      text: 'YouTube',
    },
    { href: 'https://blog.hildor.dev', label: 'Browse blog posts', icon: 'fa fa-rss-square', text: 'Blog' },
    {
      href: 'https://www.linkedin.com/in/hildor/?locale=en_US',
      label: 'Connect on LinkedIn',
      icon: 'fab fa-linkedin-in',
      text: 'LinkedIn',
    },
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
