interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
  stargazers_count: number;
}

async function getGithubData() {
  const github = await fetch('https://api.github.com/users/hildorjr/repos');
  return github.json();
}

export default async function GithubRepos() {
  const githubRepos = await getGithubData();
  const filteredRepos = githubRepos
    .filter((repo: GithubRepo) => repo.description)
    .sort((a: GithubRepo, b: GithubRepo) => b.stargazers_count - a.stargazers_count);
  
  return (
    <div className='columns is-centered' id='github'>
      <div className='column is-10'>
        <h3 className='title'>Projects</h3>
        <div className='columns is-multiline'>
          {filteredRepos.map((repo: GithubRepo) => {
            return (
              <div key={repo.name} className='column is-6 animated-column'>
                <div className='card github-card'>
                  <header className='card-header'>
                    <p className='card-header-title'>{repo.name}</p>
                  </header>
                  <div className='card-content'>
                    <div className='content'>
                      <p>{repo.description}</p>
                      {repo.topics && repo.topics.length > 0 && (
                        <div className='tags'>
                          {repo.topics.map((topic) => (
                            <span key={topic} className='tag is-info is-light'>
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <footer className='card-footer'>
                    <a className='card-footer-item' href={repo.html_url} target='_blank' rel='noreferrer'>
                      <span className='icon'>
                        <i className='fab fa-github'></i>
                      </span>
                      GitHub
                    </a>
                    {repo.homepage && (
                      <a className='card-footer-item' href={repo.homepage} target='_blank' rel='noreferrer'>
                        <span className='icon'>
                          <i className='fas fa-link'></i>
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
  );
}
