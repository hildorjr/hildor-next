import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface HashnodePost {
  slug: string;
  title: string;
  brief: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
}

async function getPosts() {
  const query = `
    {
      publication(host: "blog.hildor.dev") {
        posts(first: 10) {
          edges {
            node {
              slug
              title
              brief
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;
  const response = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.HASHNODE_TOKEN || '',
    },
    body: JSON.stringify({
      query,
    }),
  });

  const data = await response.json();
  return data;
}

interface BlogPostProps {
  post: HashnodePost;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <a className='post-card' target='_blank' href={`https://blog.hildor.dev/${post.slug}`}>
      <div className='columns'>
        <div className='column is-5'>
          <figure className='image post-image'>
            <Image priority={false} src={post.coverImage.url} alt={post.title} height={400} width={681} />
          </figure>
        </div>
        <div className='column'>
          <p className='post-time'>
            <Image src='/images/profile-2.jpg' alt='Hildor' width={30} height={30} />
            <span>Hildor Júnior</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('MMM d, YYYY')}</time>
          </p>
          <h2 className='title is-size-4'>{post.title}</h2>
          <div className='content'>
            <p>{post.brief}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default async function LastBlogPosts() {
  const postsData = await getPosts();
  const posts: any[] = postsData.data?.publication.posts.edges || [];

  return (
    <div className='columns is-centered' id='blog'>
      <div className='column is-10'>
        <h3 className='title'>Blog posts</h3>
        {posts.map(({ node }: { node: HashnodePost }) => (
          <BlogPost key={node.slug} post={node} />
        ))}
      </div>
    </div>
  );
}
