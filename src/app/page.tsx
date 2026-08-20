import {HeaderSection, ShapeDivider, AboutMe, GithubRepos, LastBlogPosts, Footer } from './components';

export default function Home() {
  return (
    <>
      <HeaderSection />
      <section className='section projects-section'>
        <ShapeDivider />
        <div className='container'>
          <div className='page-content'>
            <AboutMe />
            <GithubRepos />
            <LastBlogPosts />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
