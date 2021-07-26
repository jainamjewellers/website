import styles from "./HomeMobile.module.css";
import { useEffect, useState } from "react";
import PriceWidget from "../components/price/price";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  useEffect(() => {}, []);
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
        <div className={styles.taglineOne}>{`Purity is our`}</div>
        <div className={styles.taglineTwo}>{`Purpose`}</div>
        <div className={styles.taglineContent}>
          {`Our mission is to provide ethically sourced, contemporary, affordable and exclusive collections of fine jewelry that are carefully selected to offer an array of classic designs that are made to display the individuality of people who wear them.`}
        </div>
        <div className={styles.taglineContent}>
          {`We envision setting new dimensions to the jewelry industry in tune with the global market standards of quality, making each of our creations a unique work of art with a cherished story to tell the world.`}
        </div>
      </div>
      <div className={styles.priceTicker}>
        <PriceWidget />
      </div>
      <div className={styles.shopByCategories}>
        <div className={styles.taglineOne}>{`browse by`}</div>
        <div className={styles.taglineTwo}>{`Categories`}</div>
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
            <div>{`Mangalsutras`}</div>
          </div>
          <div className={styles.category_element}>
            <img src="/img/cardimage2.png" />
            <div>{`Rudraksh`}</div>
          </div>
          <div className={styles.category_element}>
            <img src="/img/cardimage3.png" />
            <div>{`Handmade`}</div>
          </div>
          <div className={styles.category_element}>
            <img src="/img/cardimage4.png" />
            <div>{`Chains`}</div>
          </div>
        </Carousel>
      </div>
      <div className={styles.handmadeBlock}>
        <div className={styles.taglineOne}>{`Handmade`}</div>
        <div className={styles.taglineTwo}>{`Jewellery`}</div>
      </div>
      <div className={styles.handmadeContentWrapper}>
        <div className={styles.handmadeContent}>
          {`No Mass Production Machinery Involved: By definition, handmade jewelry is literally just that, made by the “hands” of the artisan or maker.`}
        </div>
        <div className={styles.handmadeContent}>
          {`The pieces are soldered, sawed, carved and shaped without the use of mass produced manufacturing machinery.`}
        </div>
        <div className={styles.handmadeContent}>
          {`A machine can crank out hundreds of units per hour while an individual can only make a finite quantity or fraction of the number of pieces in the same amount of time.`}
        </div>
      </div>
      <img className={styles.handmadeImage} src="/img/handmade.png" />
    </div>
  );
}
