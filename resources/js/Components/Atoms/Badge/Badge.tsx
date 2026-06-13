import styles from './Badge.module.scss'

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.badge}>{children}</span>
  )
}
