import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      All rights reserved &copy; Chris Barber-Riley {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
