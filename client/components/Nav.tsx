import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import UseSwitchesCustom from './ToggleSwitch';

const Nav = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <nav className={styles.nav__container}>
      <ul className={styles.nav__main}>
        {navItems.map(({ name, link }) => (
          <li key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <UseSwitchesCustom />
    </nav>
  );
};

export default Nav;
