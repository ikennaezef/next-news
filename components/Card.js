import cardStyles from '../styles/Card.module.css';
import Link from 'next/link';
import { useApp } from '../context/state';

const Card = ({ item }) => {

  const { setCurrentArticle } = useApp();

  return (
    <Link href='/article'>
      <div className={cardStyles.card} onClick={() => setCurrentArticle(item)} >
        <img src={item.urlToImage || '/images/placeholder-image.png'} className={cardStyles.image} />
        <div className={cardStyles.text}>
          <h2 className={cardStyles.title} >{item.title}</h2>
          {item.author && <small className={cardStyles.author} ><strong>Author: </strong>{item.author}</small>}
          <p className={cardStyles.desc}>{item.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card