import { initializeApollo } from '../apis/apolloClient';
import Todo from '../components/todo';

function Home() {
  return (
    <Todo />
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;
