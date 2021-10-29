import styles from "./HomeMobile.module.css";
import { useEffect, useState } from "react";
import PriceWidget from "../components/price/price";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
  const [prmis, setPrms] = useState({});
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
      const sharePromise = await navigator.share(shareData);
      setPrms("Success");
      console.log(shareData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.homepage_content_wrapper}>
      <div className={styles.taglineBlock}>
        <div className={styles.taglineOne}>{content.section1.header[0]}</div>
        <div className={styles.taglineTwo}>{content.section1.header[1]}</div>
        <div className={styles.taglineContent}>
          {content.section1.content[0]}
        </div>
        <div className={styles.taglineContent}>
          {content.section1.content[1]}
        </div>
      </div>
      <div className={styles.priceTicker}>
        <PriceWidget />
      </div>
      <div className={styles.shopByCategories}>
        <div className={styles.taglineOne}>{content.section2.header[0]}</div>
        <div className={styles.taglineTwo}>{content.section2.header[1]}</div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          customTransition="transform 600ms ease-in-out"
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
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
        </Carousel>
      </div>
      <div className={styles.handmadeBlock}>
        <div className={styles.taglineOne}>{content.section3.header[0]}</div>
        <div className={styles.taglineTwo}>{content.section3.header[1]}</div>
      </div>
      <div className={styles.handmadeContentWrapper}>
        <div className={styles.handmadeContent}>
          {content.section3.content[0]}
        </div>
        <div className={styles.handmadeContent}>
          {content.section3.content[1]}
        </div>
        <div className={styles.handmadeContent}>
          {content.section3.content[2]}
        </div>
      </div>
      <img className={styles.handmadeImage} src="/img/handmade.png" />
    </div>
  );
}
