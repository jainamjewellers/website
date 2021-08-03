import styles from "./catalogMobile.module.css";

export default function ProductsMobile() {
  return (
    <div className={styles.aboutus_Wrapper}>
      <div className={styles.square_box_links_wrapper}>
        {CategoryObject.map((element, index) => {
          return (
            <div
              style={{
                backgroundImage: `url('https://picsum.photos/300/300?random=${
                  index + 1
                }')`,
              }}
              className={styles.square_box_link}
              key={index}
            >
              <div className={styles.border_div}>
                <div>
                  <h2>{element.title}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

let CategoryObject = [
  { title: "Mangalsutras" },
  { title: "Nawabi" },
  { title: "Rudraksh" },
  { title: "Tulsi" },
  { title: "Handmade" },
  { title: "Gold Coins" },
];
