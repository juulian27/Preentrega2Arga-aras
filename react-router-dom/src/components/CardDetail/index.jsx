import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./carddetail.module.css"

const CardDetail = () => {
    const [producto, setProducto] = useState ({});
    const {id} = useParams();

    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setProducto(data);
        })
    }, [id]);
  return (
    <div className={styles.carddetail}>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={producto.title} width="180" height="200" />
            <p>{producto.price}</p>
            <p>{producto.description}</p>
            <p>{producto.category}</p>
    </div>
  )
}

export default CardDetail