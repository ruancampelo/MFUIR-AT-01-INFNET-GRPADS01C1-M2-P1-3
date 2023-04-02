import styles from './menu.module.css'

export default () => {
  return (
    <>
      <nav className={styles.menuBar}>
        <li className={styles.textBar}>Home</li>
        <li className={styles.textBar}>Mensagens</li>
        <li className={styles.textBar}>Notificacao</li>
        <li className={styles.textBar}>Perfil</li>
      </nav>
    </>
  )
}
