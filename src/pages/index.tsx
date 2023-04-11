import ColabLogo from '@/Components/ColabLogo'
import styles from '../styles/Home.module.css'

export default function Home() {

  const colors = [
    {color : '#ff00ffd9'},
    {color : '#ff7f00d9'},
    {color : '#00ff00d9'},
    {color : '#0000ffda'},
    {color : '#ff0000e5'},
    {color : '#ffff00e5'},
    {color : '#037fffe6'},
    {color : '#7f00ffe6'},
]

  return (
    <div className={styles.homeContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.leftHeader}>
          <ColabLogo size={0.3}/>
          <div className={styles.colabName}>
            ColabEduc
          </div>
        </div>
        <div className={styles.rightContainer}>
          <a
          className={styles.cadastroButton}
          href='./signUp'
          >
            Cadastro
          </a>
        </div>
      </header>
      <div className={styles.contentContainer}>
        <div className={styles.sideSearchBar}></div>
        <div className={styles.mainContentContainer}>
        </div>
      </div>
    </div>
  )
}
