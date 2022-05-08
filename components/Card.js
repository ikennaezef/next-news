import cardStyles from '../styles/Card.module.css';

const Card = ({ item }) => {
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.title} >{item.title}</h2>
      {item.author && <small className={cardStyles.author} ><strong>Author: </strong>{item.author}</small>}
      <p className={cardStyles.desc}>{item.description}</p>
    </div>
  )
}

export default Card