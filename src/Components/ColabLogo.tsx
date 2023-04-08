import { useEffect, useState } from 'react'
import styles from '../styles/ColabLogo.module.css'
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
  weight : '500',
  subsets : ['latin']
})

type Props = {
    transTime? : number,
    shrink? : number,
    size? : number
}

function ColabLogo(props : Props) {
        
    const size : number = props.size? props.size : 1;
    const transTimeRef : number = props.transTime? props.transTime : 0;
    const shrinkRef : number = props.shrink? size - props.shrink : size;
    const [centerScale, setCenterScale] = useState(0);
    const [logoScale, setLogoScale] = useState(size);

    const [cardMap, setCardMap] = useState([
        {color : '#ff00ffd9', deg : '-90deg', scale : 0},
        {color : '#ff7f00d9', deg : '0deg', scale : 0},
        {color : '#00ff00d9', deg : '90deg', scale : 0},
        {color : '#0000ffda', deg : '180deg', scale : 0},
        {color : '#ff0000e5', deg : '-35deg', scale : 0},
        {color : '#ffff00e5', deg : '55deg', scale : 0},
        {color : '#037fffe6', deg : '145deg', scale : 0},
        {color : '#7f00ffe6', deg : '235deg', scale : 0},
    ])

    const animateLogo = () => {
        setCenterScale(1);
        setTimeout(rotateCards,transTimeRef * 2);
    }

    const rotateCards = () => {
        let updatedCardMap = cardMap.map((e, index) => {
            if(index < 4){
                return{...e, deg: (parseInt(e.deg) + 90) + 'deg', scale : 1}
            }else{
                return e
            }
        })
        setCardMap(updatedCardMap);
        setTimeout(() => rotateSecondCards(updatedCardMap), transTimeRef * 2)
    }

    const rotateSecondCards = (upCardMap : any) => {
        let updatedCardMap = upCardMap.map((e : any, index : any) => {
            if(index >= 4){
                return{...e, deg: (parseInt(e.deg) + 90) + 'deg', scale : 1}
            }else{
                return e
            }
        })
        setCardMap(updatedCardMap);
        setTimeout(shrinkLogo, transTimeRef * 2);
    }

    const shrinkLogo = () => {
        setLogoScale(shrinkRef)
    }

    useEffect(() => {
        animateLogo()
    },[])

  return (
    <div 
    className={styles.container}
    style={{['--trans-time' as any] : transTimeRef * 2 + 'ms',
    ['--logo-scale' as any] : logoScale}}
    >
        <div 
        className={styles.centerCircle}
        style={{['--center-scale' as any] : centerScale,
        ['--trans-time' as any] : transTimeRef + 'ms'}}
        >
            <h4 className={notoSans.className}>C</h4>
        </div>
        {cardMap.map((element, index) => {
            return(
                <div className={styles.cardContainer}
                key={index}
                style={{['--container-deg' as any] : cardMap[index].deg, 
                ['--trans-time' as any] : (transTimeRef) + 'ms',
                ['--container-scale' as any] : cardMap[index].scale,
                ['--z-index' as any] : (index * -1) + 8}}>
                    <div className={styles.card} 
                    style={{['--card-bg' as any] : cardMap[index].color}}></div>
                </div>
            )
        })}
    </div>
  )
}

export default ColabLogo