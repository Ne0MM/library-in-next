import { useState } from 'react'
import styles from '../styles/SignUp.module.css'

type Props = {}

function signUp({}: Props) {

  const [coverPos, setCoverPos] = useState(100);

  const handleCoverPos = () => {

    if(coverPos == 100) {setCoverPos(0)}
    else{setCoverPos(100)}

  }

  return (
    <div className={styles.Container}>
        <div className={styles.SubContainer}>
            <div className={styles.LeftContainer}></div>
            <div className={styles.RightContainer}></div>
        </div>
        <div className={styles.coverContainer} style={{['--Cover-pos' as any] : `${coverPos}%`}}>
          <button
          onClick={handleCoverPos}
          >
            Testando
          </button>
        </div>
    </div>
  )
}

export default signUp