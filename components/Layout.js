import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Nav selected={children.type.name}></Nav>
     <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
    <Footer />
    </>
   
  )
}

export default Layout