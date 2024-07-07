import { Helmet } from "react-helmet-async";
import ProductUploadForm from "../../components/UploadProduct/ProductUploadForm";
import { useState } from "react";
import ConfirmationModal from "../../components/UploadProduct/ConfirmationModal";

const UploadProduct = () => {
  const [formValue, setFormValue] = useState({});
  const [openModal, setOpenModal] = useState(false);

  // const vendorInfo = {
  //   name: "Shahed Al Amin Shihab",
  //   email: "shahed.shihab.0@gmail.com",
  // };

  return (
    <>
      <Helmet>
        <title>QR Check | Uplod Product</title>
      </Helmet>
      <section className="">
        <div className="mb-5">
          <h2 className="text-[22px] font-bold text-[#0d808f]">
            Upload New Product
          </h2>
          <p className="mt-2.5 text-[#757575]">
            Fill up the form below to upload a new product & generate QR code.
          </p>
        </div>
        <ProductUploadForm
          setFormData={setFormValue}
          setOpenModal={setOpenModal}
        />
      </section>
      {openModal && (
        <ConfirmationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          formValue={formValue}
        />
      )}
    </>
  );
};

export default UploadProduct;
