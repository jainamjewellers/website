import Layout from './components/layout'
import isMobile from './components/isMobile'
import OurCreation from './catalog/catalog_desktop'
import OurCreationMobile from './catalog/catalog_mobile'
export default function Index({isMobile}) {
    return (
        <Layout>
            {/* <div className="black_bg contactus_bg"><img src="/img/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg"/></div> */}

            {
                isMobile ?
                    <OurCreationMobile>

                    </OurCreationMobile>
                    :
                    <OurCreation>

                    </OurCreation>
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