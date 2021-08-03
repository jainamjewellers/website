import Layout from "./components/layout";
import LayoutMobile from "./components/layout_mobile";
import isMobile from "../middleware/isMobile";
import Products from "./catalog/catalog_desktop";
import ProductsMobile from "./catalog/catalog_mobile";
export default function Index({ isMobile }) {
  return (
    <>
      {isMobile ? (
        <LayoutMobile>
          <ProductsMobile></ProductsMobile>
        </LayoutMobile>
      ) : (
        <Layout>
          <Products></Products>
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
