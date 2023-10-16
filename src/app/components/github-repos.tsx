interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
}

async function getGithubData() {
  const github = await fetch('https://api.github.com/users/hildorjr/repos');
  return github.json();
}

export default async function GithubRepos() {
  const githubRepos = await getGithubData();
  return (
    <div id='github'>
      <h3 className='title has-text-centered'>Github projects</h3>
      <div className='columns is-multiline'>
        {githubRepos.map((repo: GithubRepo) => {
          return (
            <div key={repo.name} className='column is-4 animated-column'>
              <div className='card github-card'>
                <header className='card-header'>
                  <p className='card-header-title'>{repo.name}</p>
                </header>
                <div className='card-content'>
                  <div className='content'>
                    <p>{repo.description}</p>
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
  );
}
