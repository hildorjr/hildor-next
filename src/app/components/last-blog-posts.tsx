import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

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
  const response = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.HASHNODE_TOKEN || "",
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
    <div className="column is-6">
      <a
        className="card post-card"
        target="_blank"
        href={`https://blog.hildor.dev/${post.slug}`}
      >
        <div className="card-image">
          <figure className="image">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={400}
              height={200}
            />
          </figure>
        </div>
        <div className="card-header">
          <h2 className="card-header-title">{post.title}</h2>
        </div>
        <div className="card-content">
          <div className="content">
            {post.brief}
            <b>Read more</b>
            <div className="mt-3 has-text-right">
              <time dateTime={post.dateAdded}>
                <span className="icon">
                  <i className="fas fa-clock"></i>
                </span>
                {dayjs(post.dateAdded).fromNow()}
              </time>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default async function LastBlogPosts() {
  const postsData = await getPosts();
  const posts: HashnodePost[] = postsData.data.user.publication.posts || [];

  return (
    <div className="columns is-centered">
      {posts.slice(0, 1).map((post: HashnodePost) => (
        <BlogPost key={post.slug} post={post} />
      ))}
    </div>
  );
}
