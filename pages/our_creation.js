import Layout from './components/layout_desktop'
import isMobile from 'react-device-detect'
import OurCreation from './catalog/catalog_desktop'
import OurCreationMobile from './catalog/catalog_mobile'
export default function Index() {
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
