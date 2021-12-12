import styles from '../styles/ArchiveListItem.module.css';

interface ListItem {
  title: string;
  slug: string;
}

function ArchiveListItem({ title, slug }: ListItem) {
  return (
    <div key={title} className={styles.grid}>
      <a href={slug} className={styles.card}>
        <h2>{title} &rarr;</h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </div>
  );
}

export default ArchiveListItem;
