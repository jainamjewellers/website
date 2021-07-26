import styles from "./HomeMobile.module.css";
import { useEffect, useState } from "react";
import PriceWidget from "../components/price/price";

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
        <PriceWidget/>
      </div>
    </div>
  );
}
