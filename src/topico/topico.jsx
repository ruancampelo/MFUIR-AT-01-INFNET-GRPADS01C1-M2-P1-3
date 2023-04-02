import styles from './topico.module.css';

export default () => {
  return (
    <div className={styles.divTopic}>
      <div className={styles.header}>
        <img className={styles.photo} src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Pic.png"></img>
        <h4 className={styles.name}>Pedro Carvalho</h4>
        <p className={styles.date}> 24/03/2023</p>
      </div>
      <div className={styles.publicacao}>
        <h4>Publicando</h4>
        <h5>Public</h5>
        <p>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a</p>
      </div>
      <div className={styles.interacao}>
        <img src="https://www.freeiconspng.com/uploads/white-like-icon-png-20.png" /><p>50 Curtidas</p>
        <img src="https://img.icons8.com/ios-glyphs/256/share.png" /><p>10 Compartilhamentos</p>
      </div>
      <div className={styles.replie}>
        <div className={styles.replieheader}>
          <img className={styles.repliephoto} src="https://cdn-icons-png.flaticon.com/512/5234/5234205.png"></img>
          <p>Gustavo Moura</p>
        </div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
        <p>05/04/2023</p>
        <div className={styles.interacao}>
          <img src="https://www.freeiconspng.com/uploads/white-like-icon-png-20.png" /><p>10 Curtidas</p>
        </div>
      </div>
      <div className={styles.reply}>
        <input className={styles.replyinput}></input>
        <button>Enviar</button>
        <img className={styles.replyphoto} src='https://cdn-icons-png.flaticon.com/512/3135/3135768.png'></img>
      </div>
    </div >
  )
}