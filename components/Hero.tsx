import styles from '../styles/Hero.module.css';

interface HeroProps {
  title?: string;
  stanfirst?: string;
}

const Hero = ({ title, stanfirst }: HeroProps) => {
  return (
    <div className={styles.hero}>
      <h2>{title}</h2>
      {stanfirst && <p>{stanfirst}</p>}
    </div>
  );
};

export default Hero;
