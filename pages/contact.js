import Layout from "./components/layout";
import LayoutMobile from "./components/layout_mobile";
import Contact from "./contactpage/contactdesktop";
import ContactMobile from "./contactpage/contactmobile";
import isMobile from "../middleware/isMobile";
export default function Index({ isMobile }) {
  return (
    <>
      {isMobile ? (
        <LayoutMobile>
          <ContactMobile></ContactMobile>
        </LayoutMobile>
      ) : (
        <Layout>
          <Contact></Contact>
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
