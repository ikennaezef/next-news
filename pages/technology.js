import requests from '../requests';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import Card from '../components/Card';

const technology = ({ articles }) => {
  return (
    <>
      <Meta title='NewsInc - Technology News' />
      <div>
        <h1 className={styles.pageTitle}>Technology News</h1>
        <div className={styles.cards}>
          {articles.map((article, index) => <Card key={index} item={article} />)}
        </div>
      </div>
    </>
  )
}

export default technology;

export const getStaticProps = async () => {
  const res = await fetch(requests.technology);
  const { articles } = await res.json();

  return {
    props: {
      articles
    }
  }
}