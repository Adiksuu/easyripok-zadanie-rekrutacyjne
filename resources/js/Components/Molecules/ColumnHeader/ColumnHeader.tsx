import Badge from "@/Components/Atoms/Badge/Badge";
import styles from "./ColumnHeader.module.scss";

interface ColumnHeaderProps {
    title: string;
    length: number;
}

export default function ColumnHeader({ title, length } : ColumnHeaderProps) {
  return (
    <div className={styles.columnHeader}>
        <h2 className={styles.title}>{title}</h2>
        <Badge children={length}/>
    </div>
  )
}
