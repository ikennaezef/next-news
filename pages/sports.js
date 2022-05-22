import requests from '../requests';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import Card from '../components/Card';

const sports = ({ articles }) => {
  return (
    <>
      <Meta title='NewsInc - Sports News' />
      <div>
        <h1 className={styles.pageTitle}>Sports News</h1>
        <div className={styles.cards}>
          {articles.map((article, index) => <Card key={index} item={article} />)}
        </div>
      </div>
    </>
  )
}

export default sports;

export const getServerSideProps = async () => {
  const res = await fetch(requests.sports);
  const { articles } = await res.json();

  return {
    props: {
      articles
    }
  }
}