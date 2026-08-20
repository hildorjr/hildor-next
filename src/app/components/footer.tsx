import ShapeDivider from './shape-divider';
import Icon from './icons';

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://youtube.com/@hildordev',
      label: 'Watch on YouTube',
      icon: 'youtube' as const,
      text: 'YouTube',
    },
    { href: 'https://blog.hildor.dev', label: 'Browse blog posts', icon: 'rss' as const, text: 'Blog' },
    {
      href: 'https://www.linkedin.com/in/hildor/?locale=en_US',
      label: 'Connect on LinkedIn',
      icon: 'linkedin' as const,
      text: 'LinkedIn',
    },
    {
      href: 'https://github.com/hildorjr',
      label: 'Follow on Github',
      icon: 'github' as const,
      text: 'GitHub',
    },
  ];

  return (
    <footer className='footer'>
      <ShapeDivider />
      <div className='container has-text-centered'>
        <div className='footer-links'>
          {socialLinks.map((link) => (
            <a
              key={link.text}
              aria-label={link.label}
              target='_blank'
              href={link.href}
              rel='noopener noreferrer'
            >
              <Icon name={link.icon} />
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
