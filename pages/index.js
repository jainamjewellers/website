import Layout from './components/layout'
import LayoutMobile from './components/layout_mobile'
import Home from './homepage/desktop'
import HomeMobile from './homepage/mobile'
import isMobile from '../middleware/isMobile'

export default function Index({ isMobile }) {
  return (<>

    {
      isMobile ?
        <LayoutMobile>
          < HomeMobile >
          </HomeMobile >
        </LayoutMobile >
        :
        <Layout>
          <Home>
          </Home>
        </Layout>
    }

  </>)
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      isMobile: isMobile(req),
    },
  }
}
