import styles from './trends.module.css';

export default () => {
  return (
    <div className={styles.divtopic}>

      <div className={styles.hotTopics}>
        <h3>Tópicos recentes</h3>
        <ol>
          <li>Primeira publicação</li>
          <li>Teste</li>
          <li>Olá, mundo</li>
        </ol>
      </div>

      <div className={styles.hotTopics}>
        <h3>Tópicos mais curtidos</h3>
        <ol>
          <li>Primeria Publicação<p> 50 curtidas</p></li>
          <li>Teste<p> 20 curtidas</p></li>
          <li>Olá, mundo<p>10 curtidas</p></li>
        </ol>
      </div>

      <div className={styles.hotTopics}>
        <h3>Tópicos mais respondidos</h3>
        <ol>
          <li>Primeria Publicação<p> 13 respostas</p></li>
          <li>Teste<p> 6 respostas</p></li>
          <li>Olá, mundo<p>1 resposta</p></li>
        </ol>
      </div>
    </div>
  )
}