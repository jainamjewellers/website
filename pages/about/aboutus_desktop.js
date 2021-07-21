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
                  <div className={styles.our_team_content_heading}>{`Jainam Gandhi`}</div>
                  <div className={styles.our_team_content_designation}>{`Operation and Production manager`}</div>
                  <p>{`Jainam aspired to revolutionize the jewellery industry that's why he joined as the operational and production head at Jainam Jewellers. He brings in new strategies to increase production and ensure consistency. Jainam also supervises the production schedules and ensures the purity in the productions. Jainam completed his Bachelor's in Engineering from Mumbai University. His contribution to Jainam Jewellers is beyond words.`}</p>
                </div>
              </div>
              <div className={styles.our_team_main_wrapper}>
                <div className={styles.our_team_image_wrapper}>
                  <img src="https://picsum.photos/276/350?random=2"  />
                </div>
                <div className={styles.our_team_content_wrapper}>
                  <div className={styles.our_team_content_heading}>{`Rutvi Gandhi`}</div>
                  <div className={styles.our_team_content_designation}>{`Accounts and Finance manager`}</div>
                  <p>{`Rutvi completed her Bachelor’s in Commerce from the Narsee Monjee College and started at Jainam Jewellers in June 2019. She manages the accounts and ensures the firm is compliant with all the legal compliances. Her role includes the filing of GST. Starting from invoicing to ensure tax compliance, Rutvi ensures that your buying is hassle-free from Jainam Jewellers. Her contributions to Jainam Jewellers can never be expressed.`}</p>
                </div>
              </div>
            </section>
          </div>

          <div className={styles.square_box_links_wrapper}>
            <div onClick={() => setIndex(1)} className={styles.square_box_link}>
              <h2>Our Story</h2>
            </div>
            <div onClick={() => setIndex(2)} className={styles.square_box_link}>
              <h2>Our Promise</h2>
            </div>
            <div onClick={() => setIndex(3)} className={styles.square_box_link}>
              <h2>Our Creations</h2>
            </div>
            <div onClick={() => setIndex(4)} className={styles.square_box_link}>
              <h2>Our Associations</h2>
            </div>
            <div onClick={() => setIndex(5)} className={styles.square_box_link}>
              <h2>Our History</h2>
            </div>
            <div onClick={() => setIndex(6)} className={styles.square_box_link}>
              <h2>Our Team</h2>
            </div>
          </div>
        </>
      )}
      {index == 1 && (
        <div>
          <article style={{ width: "70%", margin: "auto" }}>
            <h2>Our story</h2>
            <p>
              Founded in 1986 and headquartered in Mumbai, India, Jainam
              Jewelers is a wholesale gold-jewelry manufacturer having
              experience in blending several old and modern designing methods,
              and using cutting-edge machinery to provide intricate jewelry with
              unadulterated purity by keeping intact ethical conduct and
              affordable pricing.
            </p>
            <p>
              Since its inception, we have grown to be an all-around jewelry
              manufacturer to provide a range of luxurious jewellery items like
              necklaces, chains, anklets, earrings, bracelets, and rings. From
              the handcrafted artistic touch of our experienced craftsmen to
              handling all aspects of production, assembly, and packaging—the
              main principle that guides us on our everyday operations is to be
              a one-stop-shop for all our clients.
            </p>
            <p>
              Equipped with a skilled team of in-house artisans from all over
              India, we put effort with careful consideration and attention to
              detail in designing each piece in terms of quality resulting in
              wonderfully outlined, elegant and fine jewelry in timeless styles.
              What makes us truly special is entrusting the integrity of our
              offerings to a team of talented artisans, responsible for making
              each piece unique with a personal touch and stories worth
              remembering.
            </p>
            <p>
              From helping to seal the bond with a ring on one’s engagement day,
              representing the forever promise to a bride by her husband in form
              of a personalized mangalsutra to marking the birth of a child with
              the gift of an anklet – these experiences carry forward for a
              lifetime and makes craftsmanship matter to maintain a customer’s
              trust.
            </p>
          </article>
          <button onClick={() => setIndex(0)}>{`Go Back`}</button>
        </div>
      )}
      {index == 2 && (
        <div>
          <article style={{ width: "70%", margin: "auto" }}>
            <h2>Our promise </h2>
            <p>
              At Jainam Jewellers, we stand by our promise! We make sure to
              deliver assurance by keeping our words in every possible way. Here
              is what we promise to our valuable clients.
            </p>
            <h3>Guarantee on metal’s purity</h3>
            <p>
              We stay true to our roots by delivering the most authentic Gold.
              Our Metals in ornaments are 100% pure, extracted naturally from
              the ores. From our initial days of business, we have focused on
              customer satisfaction. Metal’s purity is one quality that marks us
              preeminent.
            </p>
            <h3>Fair pricing policy</h3>
            <p>
              We come recommended when it is about the pricing! Our pricing from
              day one has always been fair as per the market standards. We
              believe in winning trust with transparency in business.
            </p>
            <h3>Timely Delivery</h3>
            <p>
              On-time delivery of customized and ordered ornaments is one more
              quality that defines us. We offer you the ornament of your choice
              at the time that you say!
            </p>
            <h3>Quality assurance on finished product</h3>
            <p>
              We have always focused on doing every bit with authenticity and
              precision. This belief in us has ignited us to deliver quality
              that we have never found before. The finished products we deliver
              are beyond words to describe. The designs and patterns in our end
              products define craftsmanship in jewelry.
            </p>
          </article>
          <button onClick={() => setIndex(0)}>{`Go Back`}</button>
        </div>
      )}
      {index == 3 && (
        <div>
          <article style={{ width: "70%", margin: "auto" }}>
            <h2>Our story</h2>
            <p>
              Founded in 1986 and headquartered in Mumbai, India, Jainam
              Jewelers is a wholesale gold-jewelry manufacturer having
              experience in blending several old and modern designing methods,
              and using cutting-edge machinery to provide intricate jewelry with
              unadulterated purity by keeping intact ethical conduct and
              affordable pricing.
            </p>
            <p>
              Since its inception, we have grown to be an all-around jewelry
              manufacturer to provide a range of luxurious jewellery items like
              necklaces, chains, anklets, earrings, bracelets, and rings. From
              the handcrafted artistic touch of our experienced craftsmen to
              handling all aspects of production, assembly, and packaging—the
              main principle that guides us on our everyday operations is to be
              a one-stop-shop for all our clients.
            </p>
            <p>
              Equipped with a skilled team of in-house artisans from all over
              India, we put effort with careful consideration and attention to
              detail in designing each piece in terms of quality resulting in
              wonderfully outlined, elegant and fine jewelry in timeless styles.
              What makes us truly special is entrusting the integrity of our
              offerings to a team of talented artisans, responsible for making
              each piece unique with a personal touch and stories worth
              remembering.
            </p>
            <p>
              From helping to seal the bond with a ring on one’s engagement day,
              representing the forever promise to a bride by her husband in form
              of a personalized mangalsutra to marking the birth of a child with
              the gift of an anklet – these experiences carry forward for a
              lifetime and makes craftsmanship matter to maintain a customer’s
              trust.
            </p>
          </article>
          <button onClick={() => setIndex(0)}>{`Go Back`}</button>
        </div>
      )}
      {index == 4 && (
        <div>
          <article style={{ width: "70%", margin: "auto" }}>
            <h2>Our story</h2>
            <p>
              Founded in 1986 and headquartered in Mumbai, India, Jainam
              Jewelers is a wholesale gold-jewelry manufacturer having
              experience in blending several old and modern designing methods,
              and using cutting-edge machinery to provide intricate jewelry with
              unadulterated purity by keeping intact ethical conduct and
              affordable pricing.
            </p>
            <p>
              Since its inception, we have grown to be an all-around jewelry
              manufacturer to provide a range of luxurious jewellery items like
              necklaces, chains, anklets, earrings, bracelets, and rings. From
              the handcrafted artistic touch of our experienced craftsmen to
              handling all aspects of production, assembly, and packaging—the
              main principle that guides us on our everyday operations is to be
              a one-stop-shop for all our clients.
            </p>
            <p>
              Equipped with a skilled team of in-house artisans from all over
              India, we put effort with careful consideration and attention to
              detail in designing each piece in terms of quality resulting in
              wonderfully outlined, elegant and fine jewelry in timeless styles.
              What makes us truly special is entrusting the integrity of our
              offerings to a team of talented artisans, responsible for making
              each piece unique with a personal touch and stories worth
              remembering.
            </p>
            <p>
              From helping to seal the bond with a ring on one’s engagement day,
              representing the forever promise to a bride by her husband in form
              of a personalized mangalsutra to marking the birth of a child with
              the gift of an anklet – these experiences carry forward for a
              lifetime and makes craftsmanship matter to maintain a customer’s
              trust.
            </p>
          </article>
          <button onClick={() => setIndex(0)}>{`Go Back`}</button>
        </div>
      )}
      {index == 5 && (
        <div>
          <article style={{ width: "70%", margin: "auto" }}>
            <h2>Our story</h2>
            <p>
              Founded in 1986 and headquartered in Mumbai, India, Jainam
              Jewelers is a wholesale gold-jewelry manufacturer having
              experience in blending several old and modern designing methods,
              and using cutting-edge machinery to provide intricate jewelry with
              unadulterated purity by keeping intact ethical conduct and
              affordable pricing.
            </p>
            <p>
              Since its inception, we have grown to be an all-around jewelry
              manufacturer to provide a range of luxurious jewellery items like
              necklaces, chains, anklets, earrings, bracelets, and rings. From
              the handcrafted artistic touch of our experienced craftsmen to
              handling all aspects of production, assembly, and packaging—the
              main principle that guides us on our everyday operations is to be
              a one-stop-shop for all our clients.
            </p>
            <p>
              Equipped with a skilled team of in-house artisans from all over
              India, we put effort with careful consideration and attention to
              detail in designing each piece in terms of quality resulting in
              wonderfully outlined, elegant and fine jewelry in timeless styles.
              What makes us truly special is entrusting the integrity of our
              offerings to a team of talented artisans, responsible for making
              each piece unique with a personal touch and stories worth
              remembering.
            </p>
            <p>
              From helping to seal the bond with a ring on one’s engagement day,
              representing the forever promise to a bride by her husband in form
              of a personalized mangalsutra to marking the birth of a child with
              the gift of an anklet – these experiences carry forward for a
              lifetime and makes craftsmanship matter to maintain a customer’s
              trust.
            </p>
          </article>
          <button onClick={() => setIndex(0)}>{`Go Back`}</button>
        </div>
      )}
      {index == 6 && (
        <div>
          <article style={{ width: "70%", margin: "auto" }}>
            <h2>Our team</h2>
            <h3></h3>
            <p>
              Tushar Gandhi aspired to bring a reliable platform for authentic
              Jewelry. With his passion for bringing the classic pieces of
              Jewelry, he satisfies every client. Moreover, he brings the new
              marketing strategies that enable Jainam Jewellers to achieve new
              heights. Client satisfaction has always been the primary aim of
              Tushar Gandhi. From 1987 to the present, he himself ensures about
              all the aspects responsible for the business's improvement. He
              believes that Ornaments mark prosperity! So, he delivers striking
              pieces of Jewelry to the clients.
            </p>
            <h3>Jainam Gandhi (Operation and Production manager)</h3>
            <p>
              Jainam aspired to revolutionize the jewellery industry that's why
              he joined as the operational and production head at Jainam
              Jewellers. He brings in new strategies to increase production and
              ensure consistency. Jainam also supervises the production
              schedules and ensures the purity in the productions. Jainam
              completed his Bachelor's in Engineering from Mumbai University.
              His contribution to Jainam Jewellers is beyond words.
            </p>
            <h3>Rutvi Gandhi (Accounts and Finance manager)</h3>
            <p>
              Rutvi Gandhi completed her Bachelor’s in Commerce from the Narsee
              Monjee College and started at Jainam Jewellers in June 2019. She
              manages the accounts and ensures the firm is compliant with all
              the legal compliances. Her role includes the filing of GST.
              Starting from invoicing to ensure tax compliance, Rutvi ensures
              that your buying is hassle-free from Jainam Jewellers. Her
              contributions to Jainam Jewellers can never be expressed.
            </p>
          </article>
          <button onClick={() => setIndex(0)}>{`Go Back`}</button>
        </div>
      )}
    </div>
  );
}
