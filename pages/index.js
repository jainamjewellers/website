import Layout from './components/layout'
import Home from './homepage/desktop'
import HomeMobile from './homepage/mobile'
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
