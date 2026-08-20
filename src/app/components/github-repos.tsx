import Icon from './icons';

interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
  stargazers_count: number;
}

async function getGithubData(): Promise<GithubRepo[]> {
  try {
    const github = await fetch('https://api.github.com/users/hildorjr/repos', {
      next: { revalidate: 3600 },
    });
    if (!github.ok) return [];
    const data = await github.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function GithubRepos() {
  const githubRepos = await getGithubData();
  const filteredRepos = githubRepos
    .filter((repo: GithubRepo) => repo.description)
    .sort((a: GithubRepo, b: GithubRepo) => b.stargazers_count - a.stargazers_count);

  if (filteredRepos.length === 0) return null;

  return (
    <div id='github'>
      <h2 className='title'>Projects</h2>
      <div className='columns is-multiline'>
        {filteredRepos.map((repo: GithubRepo) => (
          <div key={repo.name} className='column is-6'>
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
                <a className='card-footer-item' href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                  <Icon name='github' />
                  GitHub
                </a>
                {repo.homepage && (
                  <a className='card-footer-item' href={repo.homepage} target='_blank' rel='noopener noreferrer'>
                    <Icon name='link' />
                    Site
                  </a>
                )}
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
