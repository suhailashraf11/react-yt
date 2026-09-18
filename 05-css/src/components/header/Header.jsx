import React from 'react'
// import '../styles/Header.css'

import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
        <div className={styles.header}>
            <h3 className={styles.logo}>Suhail Ashraf</h3>

            <button className={styles.btn}>Login</button>

        </div>
    </div>
  )
}

export default Header
