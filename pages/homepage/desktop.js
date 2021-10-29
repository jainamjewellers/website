import styles from "./Home.module.css";
import animate from "../../styles/Animation.module.css";
import { useEffect, useState } from "react";
import PriceWidget from "../components/price/price";
import Carousel from "../components/carousel/desktop";
import HomeCarousel from "./HomeCarousel";
import enContent from "./en-content.json";
import gjContent from "./gj-content.json";
export default function Home() {
  useEffect(() => {
    let lang = localStorage.getItem("lang")
    if(lang == "gj"){
      setContent(gjContent);
    }else{
      setContent(enContent);
    }
  }, []);
  const [content,setContent] = useState(enContent)
  const handleShare = async (link) => {
    let shareData = {
      title: "JJ",
      text: `Buy Gold!`,
      url: link ? link : "https://uat.jainamjewellers.com/",
    };
    /* IMPORTANT: THE LINK NEEDS TO BE SSL ENABLED */
    /* IMPORTANT: ONLY WORKS IN MOBILE BROWSERS */
    /* ref: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share */
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.homepage_content_wrapper}>
      <div className={styles.homepage_banner_wrapper}></div>

      <div className={styles.tagline_main_wrapper}>
        <div className={styles.tagline_wrapper}>
          <div className={styles.tagline}>
            <div>{content.section1.header[0]}</div>
            <div>{content.section1.header[1]}</div>
            <p>{content.section1.content[0]}</p>
            <p>{content.section1.content[1]}</p>
          </div>
        </div>
        <PriceWidget></PriceWidget>
      </div>
      <div className={styles.homepage_categories_wrapper}>
        <div className={styles.homepage_categories_heading}>
          {content.section2.header[0]}
        </div>
        <div className={styles.homepage_categories_heading}>
          {content.section2.header[1]}
        </div>
        <div className={styles.categories_cards}>
          <div className={styles.category_element}>
            <img src="/img/cardimage1.png" />
            <div>{content.section2.content[0]}</div>
          </div>
          <div className={styles.category_element}>
            <img src="/img/cardimage2.png" />
            <div>{content.section2.content[1]}</div>
          </div>
          <div className={styles.category_element}>
            <img src="/img/cardimage3.png" />
            <div>{content.section2.content[2]}</div>
          </div>
          <div className={styles.category_element}>
            <img src="/img/cardimage4.png" />
            <div>{content.section2.content[3]}</div>
          </div>
        </div>
      </div>
      <div className={styles.homepage_handmade_wrapper}>
        <div className={styles.homepage_handmade_heading}>{content.section3.header[0]}</div>
        <div className={styles.homepage_handmade_heading}>{content.section3.header[1]}</div>
        <div className={styles.homepage_handmade_group}>
          <div className={styles.homepage_handmade_content_wrap}>
            <div>{content.section3.content[0]}</div>
            <div>{content.section3.content[1]}</div>
            <div>{content.section3.content[2]}</div>
          </div>
          <div className={styles.image_wrapper_handmade}>
            <img src="/img/handmade.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
