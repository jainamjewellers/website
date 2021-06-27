import Layout from './components/layout'
import AboutUs from './about/aboutus_desktop'
import AboutUsMobile from './about/aboutus_mobile'
import isMobile from '../middleware/isMobile'

export default function Index({ isMobile }) {
    return (
        <Layout>
            {/* <div className="black_bg contactus_bg"><img src="/img/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg"/></div> */}

            {
                isMobile ?
                    <AboutUsMobile>

                    </AboutUsMobile>
                    :
                    <AboutUs>

                    </AboutUs>
            }
        </Layout>
    )
}

export async function getServerSideProps({ req }) {
    return {
        props: {
            isMobile: isMobile(req),
        },
    }
}
