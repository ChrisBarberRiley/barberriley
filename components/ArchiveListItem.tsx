import styles from "../styles/ArchiveListItem.module.css";

interface ListItem {
  title: string;
  slug: string;
}

function ArchiveListItem({ title, slug }: ListItem) {
  return (
    <div key={title} className="text-midnight-500 hover:text-midnight-200">
      <a href={slug} className={styles.card}>
        <h2>{title} &rarr;</h2>
      </a>
    </div>
  );
}

export default ArchiveListItem;
