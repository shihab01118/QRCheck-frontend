import { Helmet } from "react-helmet-async";
import ProductUpload from "../../components/ProductUpload/ProductUpload";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>QR Check | Upload Product</title>
      </Helmet>
      <section>
        <ProductUpload />
      </section>
    </>
  );
};

export default Home;
