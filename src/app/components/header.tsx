import Image from 'next/image';

export default function HeaderSection() {
  return (
    <section className='section main-section'>
      <div className='container pt-6'>
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
            <h2 className='subtitle'>Software engineer</h2>
            <p>
              🎓 Bachelor&apos;s in Information Systems
              <br />
              🏅 MBA in Leadership, Innovation and Management
              <br />
              <br />
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
              <a target='_blank' aria-label='Browse blog posts' href='https://blog.hildor.dev'>
                <span className='icon'>
                  <i className='fa fa-rss-square'></i>
                </span>
              </a>
              <a target='_blank' aria-label='Watch on YouTube' href='https://youtube.com/@hildordev' rel='noreferrer'>
                <span className='icon'>
                  <i className='fab fa-youtube'></i>
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
