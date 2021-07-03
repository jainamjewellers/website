import styles from './about/story.module.css'
import isMobile from '../middleware/isMobile'
import Layout from './components/layout'
import LayoutMobile from './components/layout_mobile'

export default function OurStory({ isMobile }) {
    return (
        <div>
            {isMobile ?
                ""
                :
                <Layout>
                    <article style={{width:"70%",margin:"auto"}}>
                        <h2>Our story</h2>
                        <p>Founded in 1986 and headquartered in Mumbai, India, Jainam Jewelers is a wholesale gold-jewelry manufacturer having experience in blending several old and modern designing methods, and using cutting-edge machinery to provide intricate jewelry with unadulterated purity by keeping intact ethical conduct and affordable pricing.</p>
                        <p>Since its inception, we have grown to be an all-around jewelry manufacturer to provide a range of luxurious jewellery items like necklaces, chains, anklets, earrings, bracelets, and rings. From the handcrafted artistic touch of our experienced craftsmen to handling all aspects of production, assembly, and packaging—the main principle that guides us on our everyday operations is to be a one-stop-shop for all our clients.</p>
                        <p>Equipped with a skilled team of in-house artisans from all over India, we put effort with careful consideration and attention to detail in designing each piece in terms of quality resulting in wonderfully outlined, elegant and fine jewelry in timeless styles. What makes us truly special is entrusting the integrity of our offerings to a team of talented artisans, responsible for making each piece unique with a personal touch and stories worth remembering.</p>
                        <p>From helping to seal the bond with a ring on one’s engagement day, representing the forever promise to a bride by her husband in form of a personalized mangalsutra to marking the birth of a child with the gift of an anklet – these experiences carry forward for a lifetime and makes craftsmanship matter to maintain a customer’s trust.</p>
                    </article>
                </Layout>
            }
        </div>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            isMobile: isMobile(req),
        },
    }
}
