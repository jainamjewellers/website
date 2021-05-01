import styles from '../../styles/Home.module.css'
import animate from '../../styles/Animation.module.css'
import {useEffect} from 'react'
import PriceWidget from '../components/price/price'

export default function Home() {
    
    useEffect(()=>{
    
    },[])
    
    return (
        <div className={styles.homepage_content_wrapper}>
            <div className={styles.body_section}>
                <div className={`${styles.banner_content} ${animate.fade_in_2sec}` }>
                    <div className={styles.content_heading}>This is a Heading</div>
                    <div className={styles.sub_heading}>This is a Sub-Heading</div>
                    <div className={styles.sub_heading}>This is some content</div>
                    <button className={styles.button1}>Button Press</button>
                </div>
                <div className={styles.content_right_pane}>
                    <PriceWidget/>
                </div>

            </div>
        </div>
    )
}