import { useEffect, useState } from 'react'
import styles from '../styles/SignUp.module.css'
import ColabLogo from '@/Components/ColabLogo';

type Props = {}

function signUp({}: Props) {

  const [coverPos, setCoverPos] = useState(0);  //define cover side
  const [coverSize, setCoverSize] = useState(100); //shrink cover
  const [textSize, setTextSize] = useState(0) // logo text animation
  const [textPlace, setTextPlace] = useState(100) // text swing
  const [coverButtonOpacity, setCoverButtonOpacity] = useState(0)
  const [coverButtonText, setCoverButtonText] = useState("Logar")
  const [overButtonText, setOverButtonText] = useState("Ja possui conta?")

  const handleCoverPos = () => { //handle cover side
    if (coverPos == 100) {
      setCoverPos(0);
      setCoverButtonText("Entrar")
      setOverButtonText("Ja possui conta?")
    }else{
      setCoverPos(100);
      setCoverButtonText("Cadastro")
      setOverButtonText("Ainda não possui conta?")
    }
  }

  useEffect(() => {
    setTimeout(() => { //shrink cover after animation
      setCoverSize(50);
      setCoverButtonOpacity(1);
    }, 1200)
    setTextSize(1);
    setTextPlace(0);
  },[])

  return (
    <div className={styles.Container}>
        <div className={styles.SubContainer}>

            <div className={styles.LeftContainer}></div>
            <div className={styles.RightContainer}></div>
        </div>
        <div className={styles.coverContainer} 
        style={{['--Cover-pos' as any] : `${coverPos}%`,
        ['--cover-size' as any] : `${coverSize}%`}}>

          <div className={styles.logoContainer}>

            <ColabLogo size={0.5} transTime={150}/>

            <div className={styles.logoText}
            style={{['--text-scale' as any] : textSize,
            ['--text-place' as any] : textPlace + 'px'}}
            >
              <h4>ColabEduc</h4>
            </div>

            <div className={styles.coverButtonContainer}
            style={{['--button-opacity' as any] : coverButtonOpacity}}>
              <p className={styles.overButtonText}>{overButtonText}</p>
              <button
              onClick={handleCoverPos}
              className={styles.signUpButton}
              >{coverButtonText}</button> {/* Font-family not working */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default signUp