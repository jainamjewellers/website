import Layout from './components/layout'
import Contact from './contactpage/contactdesktop'
import ContactMobile from './contactpage/contactmobile'
import isMobile from './components/isMobile'
export default function Index({isMobile}) {
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

export async function getServerSideProps({ req }) {
    return {
        props: {
            isMobile: isMobile(req),
        },
    }
}