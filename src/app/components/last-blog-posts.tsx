import Image from 'next/image';
import dayjs from 'dayjs';

interface HashnodePost {
  slug: string;
  title: string;
  brief: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
}

function tagValue(xml: string, tag: string) {
  const cdata = xml.match(new RegExp(`<${tag}[^>]*>\\s*<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>`));
  if (cdata) return cdata[1].trim();
  const plain = xml.match(new RegExp(`<${tag}[^>]*>\\s*([^<]*)`));
  return plain?.[1].trim() ?? '';
}

function parseRss(xml: string): HashnodePost[] {
  return (xml.match(/<item>[\s\S]*?<\/item>/g) ?? [])
    .map((item) => {
      const link = tagValue(item, 'link');
      return {
        slug: link.replace(/\/$/, '').split('/').pop() ?? '',
        title: tagValue(item, 'title'),
        brief: tagValue(item, 'description'),
        coverImage: { url: item.match(/<enclosure[^>]*url="([^"]+)"/)?.[1] ?? '' },
        publishedAt: tagValue(item, 'pubDate'),
      };
    })
    .filter((post) => post.slug && post.title && post.coverImage.url);
}

async function getPosts(): Promise<HashnodePost[]> {
  try {
    const response = await fetch('https://blog.hildor.dev/rss.xml', {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    return parseRss(await response.text());
  } catch {
    return [];
  }
}

interface BlogPostProps {
  post: HashnodePost;
}

function BlogPost({ post }: BlogPostProps) {
  return (
    <a className='post-card' target='_blank' rel='noopener noreferrer' href={`https://blog.hildor.dev/${post.slug}`}>
      <div className='columns'>
        <div className='column is-5'>
          <figure className='image post-image'>
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              sizes='(max-width: 768px) 92vw, 420px'
            />
          </figure>
        </div>
        <div className='column'>
          <p className='post-time'>
            <Image src='/images/profile-2.jpg' alt='' width={30} height={30} sizes='30px' />
            <span>Hildor Júnior</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{dayjs(post.publishedAt).format('MMM d, YYYY')}</time>
          </p>
          <h3 className='title is-size-4'>{post.title}</h3>
          <div className='content'>
            <p>{post.brief}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default async function LastBlogPosts() {
  const posts = await getPosts();

  if (posts.length === 0) return null;

  return (
    <div id='blog'>
      <h2 className='title'>Blog posts</h2>
      {posts.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
    </div>
  );
}
