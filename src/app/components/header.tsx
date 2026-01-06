import Image from 'next/image';

export default function HeaderSection() {
  return (
    <section className='section main-section'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-3 has-text-right has-text-centered-mobile'>
            <Image
              src='/images/profile-2.jpg'
              alt='Hildor'
              className='profile is-rounded'
              width={400}
              height={400}
              priority={true}
              quality={90}
            />
          </div>
          <div className='column is-5 has-text-centered-mobile'>
            <h1 className='title'>Hildor Júnior</h1>
            <h2 className='subtitle mb-6'>Full-Stack Software Engineer</h2>
            <p className='mb-2'>
              Turning ideas into software that works since 2016
            </p>
            <p className='is-size-7 mb-3'>
              B.S. Information Systems • MBA in Leadership & Innovation
            </p>
            <p>
              <a target='_blank' aria-label='Watch on YouTube' href='https://youtube.com/@hildordev' rel='noreferrer'>
                <span className='icon'>
                  <i className='fab fa-youtube'></i>
                </span>
              </a>
              <a target='_blank' aria-label='Browse blog posts' href='https://blog.hildor.dev'>
                <span className='icon'>
                  <i className='fa fa-rss-square'></i>
                </span>
              </a>
              <a
                target='_blank'
                aria-label='Connect on LinkedIn'
                href='https://www.linkedin.com/in/hildor'
                rel='noreferrer'
              >
                <span className='icon'>
                  <i className='fab fa-linkedin-in'></i>
                </span>
              </a>
              <a target='_blank' aria-label='Follow on Github' href='https://github.com/hildorjr' rel='noreferrer'>
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
