import Image from "next/image";
import Script from "next/script";

export async function getGithubData() {
  const github = await fetch("https://api.github.com/users/hildorjr/repos");
  return github.json();
}

export default async function Home() {
  const githubData = await getGithubData();
  return (
    <>
      <section className="section main-section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-3 has-text-right has-text-centered-mobile">
              <Image
                src="/profile.jpg"
                alt="Hildor"
                className="profile is-rounded"
                width={500}
                height={500}
                priority={true}
              />
            </div>
            <div className="column is-4 has-text-centered-mobile">
              <h2 className="title">Hildor</h2>
              <h5 className="subtitle">Front-end engineer</h5>
              <p>
                🎓 Bachelor&apos;s in Information Systems
                <br />
                🏅 MBA in Leadership, Innovation and Management
                <br />
                <br />
                <a target="_blank" href="https://blog.hildor.dev">
                  <span className="icon">
                    <i className="fa fa-rss-square"></i>
                  </span>
                </a>
                <a target="_blank" href="mailto:oi@hildor.com.br">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/hildorjr"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hildor"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section has-background-light projects-section"
        id="projects"
      >
        <div className="shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <h2 className="title has-text-centered">About me</h2>
              <div className="content has-text-justified">
                <p>
                  Bachelor in Information Systems graduated from the Pontifical
                  Catholic University of Rio Grande do Sul (PUCRS) in 2020 and
                  postgraduate in Leadership, Innovation and Management also
                  from PUCRS in 2022.
                  <br />
                  <br />
                  With more than 6 years of experience in the IT market, I had
                  the opportunity to work in the most diverse types of projects
                  and companies from small to large. I was able to work on
                  projects in the financial, banking and logistics sectors, as
                  well as in the field of health and social events.
                  <br />
                  <br />
                  Enthusiastic about new technologies and agile project
                  management, I believe in delivering value in line with the
                  expectations and needs of each client and project.
                  <br />
                  <br />
                  If you want to follow along to know a little more about me and
                  my work, also{" "}
                  <a target="_blank" href="https://blog.hildor.com.br">
                    check out my blog.
                  </a>
                </p>
              </div>
              <h2 className="title has-text-centered mt-6">Projects</h2>
              <div className="columns is-multiline">
                {githubData.map((p: any) => {
                  return (
                    <div key={p.name} className="column is-4 animated-column">
                      <div className="card">
                        <header className="card-header">
                          <p className="card-header-title">{p.name}</p>
                        </header>
                        <div className="card-content">
                          <div className="content">
                            <p>{p.description}</p>
                          </div>
                        </div>
                        <footer className="card-footer">
                          <a
                            className="card-footer-item"
                            href={p.html_url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="icon">
                              <i className="fab fa-github"></i>
                            </span>
                            GitHub
                          </a>
                          <a
                            className="card-footer-item"
                            v-if="p.homepage"
                            href={p.homepage}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="icon">
                              <i className="fas fa-link"></i>
                            </span>
                            Site
                          </a>
                        </footer>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer has-text-centered">
        <div className="shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <p className="mb-6">
            Made with <i className="fas fa-heart has-text-danger op-1"></i> by
            Hildor
          </p>
          <a target="_blank" href="https://blog.hildor.com.br">
            <span className="icon">
              <i className="fa fa-rss-square"></i>
            </span>
            Blog
          </a>
          <a target="_blank" href="mailto:oi@hildor.com.br">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            E-mail
          </a>
          <a
            target="_blank"
            href="https://github.com/hildorjr"
            rel="noreferrer"
          >
            <span className="icon">
              <i className="fab fa-github"></i>
            </span>
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hildor"
            rel="noreferrer"
          >
            <span className="icon">
              <i className="fab fa-linkedin-in"></i>
            </span>
            LinkedIn
          </a>
        </div>
      </footer>
      {/* Person Schema */}
      {/* <Script type="application/ld+json">
        {
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "Hildor Junior",
          "jobTitle": "Desenvolvedor Front-end",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Porto Alegre",
            "addressRegion": "RS"
          }
        }
      </Script> */}
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-54463958-2"
      ></Script>
      {/* <Script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-54463958-2');
      </Script> */}
      {/* Font Awesome */}
      <Script
        src="https://kit.fontawesome.com/2796ccc163.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      ></Script>
    </>
  );
}
