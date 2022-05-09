import { useApp } from '../context/state';
import Link from 'next/link';
import styles from '../styles/Article.module.css';

const article = () => {

  const { currentArticle } = useApp();
  console.log(currentArticle);

  return (
    <div>
      {currentArticle ? (
        <>
          <h2 className={styles.title}>{currentArticle.title}</h2>
          <img src={currentArticle?.urlToImage} className={styles.image} />
          {currentArticle.author && <p className={styles.author}>Author: {currentArticle?.author}</p>}
          <p className={styles.author}>Source: {currentArticle?.source?.name}</p>
          <p>Vengo baile la recodos mudas lo la la la desgarrados, lo quemadas hombrecillo húmedo me olvidando mármol los tierra talco. El nino sus que las algodón el las lenguas muertos. Los queman atrás transparente de donde tránsito las y nino. Deja brooklyn tierra los olvidando. Con pies amor mueven diana de entonces las, vacía tierra mi sepultura mueven huevos para los se yo. Que subía la nube la los pero de el tierra, tierra amor por perfil de de, pero.</p>
          <a href={currentArticle.url} target='_blank' className={styles.link} >Read More</a>
        </>
      ) : (
        <>
          <p>Sorry, there is nothing here. Please return to the home page and select an article.</p>
          <Link href='/'>
            <a className={styles.link} >Return to Home</a>
          </Link>
        </>
      )}
    </div>
  )
}

export default article