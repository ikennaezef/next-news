import requests from '../requests';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import Card from '../components/Card';

export default function Home({ articles }) {
  console.log(articles);

  return (
    <div className={styles.container}>
      <Meta title='NewsInc - Home' />
      <h2>Home Page</h2>
      <div className={styles.cards}>
        {articles.map((article, index) => <Card key={index} item={article} />)}
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(requests.all);
  const { articles } = await res.json();

  return {
    props: {
      articles
    }
  }
}
