import styles from './Home.module.css'
import animate from '../../styles/Animation.module.css'
import {useEffect} from 'react'
import PriceWidget from '../components/price/price'
import Carousel from '../components/carousel/desktop'
import HomeCarousel from './HomeCarousel'

export default function Home() {
    useEffect(()=>{
    
    },[])
    
    return (
        <div className={styles.homepage_content_wrapper}>
            <HomeCarousel/>
            <div className={styles.body_section}>
                <div className={`${styles.banner_content} fade-2s`}>
                    <div className={styles.content_heading}>Finest Jewellery</div>
                    <div className={`${styles.sub_heading} fade-5s`}>designs that inspire</div>
                    <div className={`${styles.sub_heading} fade-10s`}>our collection you must admire</div>
                    <button className={styles.button1}>View now</button>
                </div>

            </div>
            {/* <Carousel></Carousel> */}
        </div>
    )
}