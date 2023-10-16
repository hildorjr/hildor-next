import Image from 'next/image';
import ShapeDivider from './components/shape-divider';
import CustomCursor from './components/mouse-trailer';
import LastBlogPosts from './components/last-blog-posts';
import GithubRepos from './components/github-repos';
import AboutMe from './components/about-me';

function HeaderSection() {
  return (
    <section className='section main-section'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-3 has-text-right has-text-centered-mobile'>
            <Image
              src='/images/profile.jpg'
              alt='Hildor'
              className='profile is-rounded'
              width={300}
              height={300}
              priority={true}
            />
          </div>
          <div className='column is-4 has-text-centered-mobile'>
            <h1 className='title'>Hildor</h1>
            <h2 className='subtitle'>Front-end engineer</h2>
            <p>
              🎓 Bachelor&apos;s in Information Systems
              <br />
              🏅 MBA in Leadership, Innovation and Management
              <br />
              <br />
              <a target='_blank' href='https://www.linkedin.com/in/hildor' rel='noreferrer'>
                <span className='icon'>
                  <i className='fab fa-linkedin-in'></i>
                </span>
              </a>
              <a target='_blank' href='https://blog.hildor.dev'>
                <span className='icon'>
                  <i className='fa fa-rss-square'></i>
                </span>
              </a>
              <a target='_blank' href='https://github.com/hildorjr' rel='noreferrer'>
                <span className='icon'>
                  <i className='fab fa-github'></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className='section projects-section' id='projects'>
      <ShapeDivider />
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-10'>
            <AboutMe />
            <GithubRepos />
            <LastBlogPosts />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/hildor/?locale=en_US',
      icon: 'fab fa-linkedin-in',
      text: 'LinkedIn',
    },
    { href: 'https://blog.hildor.dev', icon: 'fa fa-rss-square', text: 'Blog' },
    {
      href: 'https://github.com/hildorjr',
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
            <a key={link.text} target='_blank' href={link.href} rel='noreferrer'>
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

export default function Home() {
  return (
    <>
      <CustomCursor />
      <HeaderSection />
      <AboutSection />
      <Footer />
    </>
  );
}
