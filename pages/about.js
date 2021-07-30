import Layout from "./components/layout";
import LayoutMobile from './components/layout_mobile'
import AboutUs from "./about/aboutus_desktop";
import AboutUsMobile from "./about/aboutus_mobile";
import isMobile from "../middleware/isMobile";

export default function Index({ isMobile }) {
  return (
    <>
      {isMobile ? (
        <LayoutMobile>
          <AboutUsMobile></AboutUsMobile>
        </LayoutMobile>
      ) : (
        <Layout>
          <AboutUs></AboutUs>
        </Layout>
      )}
    </>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      isMobile: isMobile(req),
    },
  };
}
