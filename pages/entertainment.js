import requests from '../requests';
import styles from '../styles/Home.module.css';
import Meta from '../components/Meta';
import Card from '../components/Card';

const entertainment = ({ articles }) => {
  return (
    <>
      <Meta title='NewsInc - Entertainment News' />
      <div>
        <h1 className={styles.pageTitle}>Entertainment News</h1>
        <div className={styles.cards}>
          {articles.map((article, index) => <Card key={index} item={article} />)}
        </div>
      </div>
    </>
  )
}

export default entertainment;

export const getServerSideProps = async () => {
  const res = await fetch(requests.entertainment);
  const { articles } = await res.json();

  return {
    props: {
      articles
    }
  }
}