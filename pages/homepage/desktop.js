import styles from "./Home.module.css";
import animate from "../../styles/Animation.module.css";
import { useEffect, useState } from "react";
import PriceWidget from "../components/price/price";
import Carousel from "../components/carousel/desktop";
import HomeCarousel from "./HomeCarousel";
export default function Home() {
  useEffect(() => {}, []);
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
            <div>Purity is our</div>
            <div>Purpose</div>
            <p>
              Our mission is to provide ethically sourced, contemporary,
              affordable and exclusive collections of fine jewelry that are
              carefully selected to offer an array of classic designs that are
              made to display the individuality of people who wear them.
            </p>
            <p>
              We envision setting new dimensions to the jewelry industry in tune
              with the global market standards of quality, making each of our
              creations a unique work of art with a cherished story to tell the
              world.
            </p>
          </div>
        </div>
        <PriceWidget></PriceWidget>
      </div>
      <div className={styles.homepage_categories_wrapper}>
        <div className={styles.homepage_categories_heading}>{`browse by`}</div>
        <div className={styles.homepage_categories_heading}>{`Categories`}</div>
        <div className={styles.categories_cards}>
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
        </div>
      </div>
      <div className={styles.homepage_handmade_wrapper}>
        <div className={styles.homepage_handmade_heading}>{`Handmade`}</div>
        <div className={styles.homepage_handmade_heading}>{`Jewellery`}</div>
        <div className={styles.homepage_handmade_group}>
          <div className={styles.homepage_handmade_content_wrap}>
            <div>
              {`No Mass Production Machinery Involved: By definition, handmade
              jewelry is literally just that, made by the “hands” of the artisan
              or maker.`}
            </div>
            <div>
              {`The pieces are soldered, sawed, carved and shaped without the use
              of mass produced manufacturing machinery.`}
            </div>
            <div>
              {`A machine can crank out hundreds of units per hour while an
              individual can only make a finite quantity or fraction of the
              number of pieces in the same amount of time.`}
            </div>
          </div>
          <div className={styles.image_wrapper_handmade}>
            <img src="/img/handmade.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
