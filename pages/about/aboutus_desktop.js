import styles from "./about.module.css";
import { useState } from "react";
export default function AboutUs(props) {
  const [index, setIndex] = useState(0);
  const [readMore1, setRead1] = useState(false);
  return (
    <div className={styles.aboutus_Wrapper}>
      {index == 0 && (
        <>
          <div className={styles.info_box_Wrapper}>
            <section className={styles.aboutus_text_section}>
              <h2>We are</h2>
              <h2>Artisans</h2>
              <p>
                Our mission is to provide ethically sourced, contemporary,
                affordable and exclusive collections of fine jewelry that are
                carefully selected to offer an array of classic designs that are
                made to display the individuality of people who wear them.
              </p>
              <p>
                We envision setting new dimensions to the jewelry industry in
                tune with the global market standards of quality, making each of
                our creations a unique work of art with a cherished story to
                tell the world.
              </p>
            </section>
          </div>

          <div className={styles.our_history_Wrapper}>
            <div className={styles.our_history_image_Wrapper}>
              <img src="/img/image11.png" />
            </div>
            <section className={styles.aboutus_history_section}>
              <h2>Our History</h2>
              <div
                className={styles.aboutus_history_section_collapsable}
                style={{ height: readMore1 ? "600px" : "200px" }}
              >
                <p>
                  Founded in 1986 and headquartered in Mumbai, India, Jainam
                  Jewelers is a wholesale gold-jewelry manufacturer having
                  experience in blending several old and modern designing
                  methods, and using cutting-edge machinery to provide intricate
                  jewelry with unadulterated purity by keeping intact ethical
                  conduct and affordable pricing.
                </p>
                <p>
                  Since its inception, we have grown to be an all-around jewelry
                  manufacturer to provide a range of luxurious jewellery items
                  like necklaces, chains, anklets, earrings, bracelets, and
                  rings. From the handcrafted artistic touch of our experienced
                  craftsmen to handling all aspects of production, assembly, and
                  packaging—the main principle that guides us on our everyday
                  operations is to be a one-stop-shop for all our clients.
                </p>
                <p>
                  Equipped with a skilled team of in-house artisans from all
                  over India, we put effort with careful consideration and
                  attention to detail in designing each piece in terms of
                  quality resulting in wonderfully outlined, elegant and fine
                  jewelry in timeless styles. What makes us truly special is
                  entrusting the integrity of our offerings to a team of
                  talented artisans, responsible for making each piece unique
                  with a personal touch and stories worth remembering.
                </p>
                <p>
                  From helping to seal the bond with a ring on one’s engagement
                  day, representing the forever promise to a bride by her
                  husband in form of a personalized mangalsutra to marking the
                  birth of a child with the gift of an anklet – these
                  experiences carry forward for a lifetime and makes
                  craftsmanship matter to maintain a customer’s trust.
                </p>
              </div>
              <div
                onClick={() => {
                  setRead1(!readMore1);
                }}
                className={styles.aboutus_ReadMore}
              >
                {readMore1 ? `Collapse` : `Read full story`}
              </div>
            </section>
          </div>

          <div className={styles.info_box_Wrapper}>
            <section className={styles.our_team_section}>
              <h2>Our Team</h2>
              <div className={styles.our_team_main_wrapper}>
                <div className={styles.our_team_image_wrapper}>
                  <img src="https://picsum.photos/276/350?random=1" />
                </div>
                <div className={styles.our_team_content_wrapper}>
                  <div
                    className={styles.our_team_content_heading}
                  >{`Jainam Gandhi`}</div>
                  <div
                    className={styles.our_team_content_designation}
                  >{`Operation and Production manager`}</div>
                  <p>{`Jainam aspired to revolutionize the jewellery industry that's why he joined as the operational and production head at Jainam Jewellers. He brings in new strategies to increase production and ensure consistency. Jainam also supervises the production schedules and ensures the purity in the productions. Jainam completed his Bachelor's in Engineering from Mumbai University. His contribution to Jainam Jewellers is beyond words.`}</p>
                </div>
              </div>
              <div className={styles.our_team_main_wrapper}>
                <div className={styles.our_team_image_wrapper}>
                  <img src="https://picsum.photos/276/350?random=2" />
                </div>
                <div className={styles.our_team_content_wrapper}>
                  <div
                    className={styles.our_team_content_heading}
                  >{`Rutvi Gandhi`}</div>
                  <div
                    className={styles.our_team_content_designation}
                  >{`Accounts and Finance manager`}</div>
                  <p>{`Rutvi completed her Bachelor’s in Commerce from the Narsee Monjee College and started at Jainam Jewellers in June 2019. She manages the accounts and ensures the firm is compliant with all the legal compliances. Her role includes the filing of GST. Starting from invoicing to ensure tax compliance, Rutvi ensures that your buying is hassle-free from Jainam Jewellers. Her contributions to Jainam Jewellers can never be expressed.`}</p>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
