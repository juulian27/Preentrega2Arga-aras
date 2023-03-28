import { Link } from "react-router-dom"
import styles from "./card.module.css"

const Card = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
    <div className={styles.cardContainer}>
        <div className={styles.container}>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={producto.title} width="180" height="200" />
            <p>{producto.price}</p>
        </div>
    </div>
    </Link>
  )
}

export default Card