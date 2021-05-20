import Layout from './components/layout_desktop'
import Home from './homepage/desktop'
import HomeMobile from './homepage/desktop'
import isMobile from 'react-device-detect'
export default function Index() {
  return (
    <Layout>
      {isMobile?
      <HomeMobile>

      </HomeMobile>
      :
      <Home>

      </Home>}
    </Layout>
  )
}
