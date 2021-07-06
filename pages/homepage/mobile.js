import styles from './HomeMobile.module.css'
import {useEffect, useState} from 'react'

export default function Home() {
    useEffect(()=>{
    
    },[])
    const[prmis,setPrms]=useState({})
    const handleShare = async (link) => {
        let shareData= {
            title: 'JJ',
            text: `Buy Gold!`,
            url: (link)?(link):'https://uat.jainamjewellers.com/'
            }
        /* IMPORTANT: THE LINK NEEDS TO BE SSL ENABLED */
        /* IMPORTANT: ONLY WORKS IN MOBILE BROWSERS */
        /* ref: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share */
        try{
            const sharePromise = await navigator.share(shareData)
            setPrms("Success")
            console.log(shareData)
        }catch(err){
            console.log(err)
        }
          
      };
    
    return (
        <div className={styles.homepage_content_wrapper}>
           <button onClick={()=>handleShare()}></button>
           <div>{JSON.stringify(prmis)}</div>
        </div>
    )
}