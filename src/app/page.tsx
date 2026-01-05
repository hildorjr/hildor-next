import {HeaderSection, ShapeDivider, AboutMe, GithubRepos, LastBlogPosts, Footer } from './components';

export default function Home() {
  return (
    <>
      <HeaderSection />
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
      <Footer />
    </>
  );
}
