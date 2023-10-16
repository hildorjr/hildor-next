import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

interface HashnodePost {
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
}

async function getPosts() {
  const query = `
    {
      user(username: "hildor") {
        publication {
          posts(page: 0) {
            slug
            title
            brief
            coverImage
            dateAdded
          }
        }
      }
    }
  `;
  const response = await fetch('https://api.hashnode.com/', {
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
        <div className='column is-4'>
          <figure className='image post-image'>
            <Image src={post.coverImage} alt={post.title} fill />
          </figure>
        </div>
        <div className='column'>
          <p className='post-time'>
            <Image src='/images/profile.jpg' alt='Hildor' width={30} height={30} />
            <span>Hildor Júnior</span>
            <span>·</span>
            <time dateTime={post.dateAdded}>{dayjs(post.dateAdded).format('MMM d, YYYY')}</time>
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
  const posts: HashnodePost[] = postsData.data.user.publication.posts || [];

  return (
    <div id='blog'>
      <h3 className='title has-text-centered'>Blog posts</h3>
      {posts.map((post: HashnodePost) => (
        <BlogPost key={post.slug} post={post} />
      ))}
    </div>
  );
}
