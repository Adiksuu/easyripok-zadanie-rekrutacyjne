import Button from "@/Components/Atoms/Button/Button";
import styles from "./Header.module.scss";
import Icon from "@/Components/Atoms/Icon/Icon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1 className={styles.text}>Wszystkie zadania</h1>
        <Button children={
            <>
                <Icon icon={faPlus} /> Dodaj zadanie
            </>
        } />
    </header>
  )
}
