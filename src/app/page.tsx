import Image from "next/image";
import ShapeDivider from "./components/shape-divider";
import CustomCursor from "./components/custom-cursor";

async function getGithubData() {
  const github = await fetch("https://api.github.com/users/hildorjr/repos");
  return github.json();
}

export default async function Home() {
  const githubData = await getGithubData();
  return (
    <>
      <CustomCursor />
      <section className="section main-section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-3 has-text-right has-text-centered-mobile">
              <Image
                src="/profile.jpg"
                alt="Hildor"
                className="profile is-rounded"
                width={300}
                height={300}
                priority={true}
              />
            </div>
            <div className="column is-4 has-text-centered-mobile">
              <h1 className="title">Hildor</h1>
              <h2 className="subtitle">Front-end engineer</h2>
              <p>
                🎓 Bachelor&apos;s in Information Systems
                <br />
                🏅 MBA in Leadership, Innovation and Management
                <br />
                <br />
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/hildor"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </a>
                <a target="_blank" href="https://blog.hildor.dev">
                  <span className="icon">
                    <i className="fa fa-rss-square"></i>
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
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section projects-section" id="projects">
        <ShapeDivider />
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <h3 className="title has-text-centered">About me</h3>
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
              <h3 className="title has-text-centered mt-6">Github Projects</h3>
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
                          {p.homepage && (
                            <a
                              className="card-footer-item"
                              href={p.homepage}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="icon">
                                <i className="fas fa-link"></i>
                              </span>
                              Site
                            </a>
                          )}
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
      <footer className="footer">
        <ShapeDivider />
        <div className="container has-text-centered">
          <p className="mb-6">
            Made with <i className="fas fa-heart has-text-danger op-1"></i> by
            Hildor
          </p>
          <div className="footer-links">
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
            <a target="_blank" href="https://blog.hildor.dev">
              <span className="icon">
                <i className="fa fa-rss-square"></i>
              </span>
              Blog
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
          </div>
        </div>
      </footer>
    </>
  );
}
