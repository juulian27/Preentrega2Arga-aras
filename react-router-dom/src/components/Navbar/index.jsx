import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to ="/products">
          <p>Productos</p>
        </Link>
        <CartWidget />
      </nav>
    </div>
  )
}

export default Navbar