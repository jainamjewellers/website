import Layout from './components/layout_desktop'
import Contact from './contactpage/contactdesktop'
import ContactMobile from './contactpage/contactmobile'
import isMobile from 'react-device-detect'
export default function Index() {
    return (
        <Layout>
            {/* <div className="black_bg contactus_bg"><img src="/img/rene-bohmer-YeUVDKZWSZ4-unsplash.jpg"/></div> */}

            {
                isMobile ?
                    <ContactMobile>

                    </ContactMobile>
                    :
                    <Contact>

                    </Contact>
            }
        </Layout>
    )
}
