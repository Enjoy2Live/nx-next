export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking', // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const post = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  };
}

const ideaName = ({ post }) => {
    return (
      <div>
        
      </div>
    );
  };
  
  export default ideaName;
  