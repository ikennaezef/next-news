import Meta from '../components/Meta';
import styles from '../styles/Home.module.css';

const about = () => {
  return (
    <>
      <Meta title='NewsInc - About' />
      <div>
        <h2 className={styles.pageTitle}>About NewsInc</h2>
        <div className={styles.aboutGrid}>
          <div>
            <img src='/images/news.jpg' className={styles.aboutImg} />
          </div>
          <p className={styles.aboutText}>
            NewsInc is a site that brings you news from different sources all over the world. Perchance or despair rake glee his and, saw friends hall seek feere maddest alone. Though harold the not finds, from memory breast go apart moths if in seemed, within bacchanals was wight ah none could but break. Vast womans like would to. Native and into dome of a a through harold, for eros ungodly tales grief. Childe where oh that they, him dares all one nor earthly, their that superstition.
          </p>
        </div>
      </div>
    </>
  )
}

export default about