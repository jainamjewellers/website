import Layout from './components/layout'
import LayoutMobile from './components/layout_mobile'
import BlogPage from './blog/BlogPageDesktop'
import BlogPageMobile from './blog/BlogPageMobile'
import isMobile from '../middleware/isMobile'

export default function Index({ isMobile }) {
  return (<>

    {
      isMobile ?
        <LayoutMobile>
          < BlogPageMobile >
          </BlogPageMobile >
        </LayoutMobile >
        :
        <Layout>
          <BlogPage>
          </BlogPage>
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
