import Icon from './icons';

export default function HeaderSection() {
  return (
    <section className='section main-section'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-3 has-text-right has-text-centered-mobile'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/profile.webp'
              alt='Portrait of Hildor Júnior'
              className='profile is-rounded'
              width={500}
              height={500}
              fetchPriority='high'
              decoding='async'
            />
          </div>
          <div className='column is-5 has-text-centered-mobile'>
            <h1 className='title'>Hildor Júnior</h1>
            <p className='subtitle mb-6'>Full-Stack Software Engineer</p>
            <p className='mb-2'>Turning ideas into software that works since 2016</p>
            <p className='is-size-7 mb-3'>B.S. Information Systems • MBA in Leadership & Innovation</p>
            <p>
              <a
                target='_blank'
                aria-label='Watch on YouTube'
                href='https://youtube.com/@hildordev'
                rel='noopener noreferrer'
              >
                <Icon name='youtube' />
              </a>
              <a target='_blank' aria-label='Browse blog posts' href='https://blog.hildor.dev' rel='noopener noreferrer'>
                <Icon name='rss' />
              </a>
              <a
                target='_blank'
                aria-label='Connect on LinkedIn'
                href='https://www.linkedin.com/in/hildor'
                rel='noopener noreferrer'
              >
                <Icon name='linkedin' />
              </a>
              <a
                target='_blank'
                aria-label='Follow on Github'
                href='https://github.com/hildorjr'
                rel='noopener noreferrer'
              >
                <Icon name='github' />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
