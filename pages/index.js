import Layout from './components/layout'
import LayoutMobile from './components/layout_mobile'
import Home from './homepage/desktop'
import HomeMobile from './homepage/mobile'
import { isMobile } from 'react-device-detect'
export default function Index() {
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
