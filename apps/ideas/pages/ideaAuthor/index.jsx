import Link from 'next/link';

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

const ideaAuthor = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <pre key={post.id}>
          <Link href={`/ideaAuthor/${post.id}`} passHref>
            <a>{post.title}</a>
          </Link>
        </pre>
      ))}
    </div>
  );
};

export default ideaAuthor;
