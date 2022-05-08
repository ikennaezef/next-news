import cardStyles from '../styles/Card.module.css';
import Link from 'next/link';

const Card = ({ item }) => {

  const itemId = Math.floor(Math.random() * 100000000);



  return (
    <Link href='/article/[id]' as={`/article/${itemId}`}>
      <div className={cardStyles.card}>
        <img src={item.urlToImage} className={cardStyles.image} />
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