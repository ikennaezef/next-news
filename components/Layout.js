import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta'

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout