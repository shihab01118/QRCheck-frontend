import { useState } from "react";
import PropTypes from "prop-types";

const ProductUploadForm = ({setFormData, setOpenModal}) => {
  const [productName, setProductName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productIngredients, setProductIngredients] = useState("");
  const [productValidityPeriod, setProductValidityPeriod] = useState("");
  const [bstiCertified, setBstiCertified] = useState(null);
  const [halalCertified, setHalalCertified] = useState(null);
  const [additionalInformation, setAdditionalInformation] = useState("");

  

  const handleUploadProduct = (e) => {
    e.preventDefault();

    const value = {
      productName,
      companyName,
      productWeight,
      productPrice,
      productIngredients,
      productValidityPeriod,
      bstiCertified,
      halalCertified,
      additionalInformation,
    };
    
    setFormData(value);
    setOpenModal(true);
  };

  return (
    <form
      onSubmit={handleUploadProduct}
      className="bg-white px-8 py-5 rounded-md shadow-sm"
    >
      <h2 className="text-lg font-medium text-[#0077B6] mb-2">
        Product Information:{" "}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-gray-800 font-medium">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Product Name"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-800 font-medium">
            Company Name
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Company Name"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-800 font-medium">
            Product Weight (Gram)
          </label>
          <input
            type="text"
            value={productWeight}
            onChange={(e) => setProductWeight(e.target.value)}
            placeholder="Enter Product Weight"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-800 font-medium">
            Product MRP (TK)
          </label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter Product Price"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-800 font-medium">
            Product Ingredients
          </label>
          <input
            type="text"
            value={productIngredients}
            onChange={(e) => setProductIngredients(e.target.value)}
            placeholder="Enter Product Ingredients"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-gray-800 font-medium">
            Validity Period in Months
          </label>
          <input
            type="number"
            value={productValidityPeriod}
            onChange={(e) => setProductValidityPeriod(e.target.value)}
            placeholder="e.g., 6"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            required
          />
        </div>
      </div>
      <h2 className="text-lg font-medium text-[#0077B6] mt-4 mb-2">
        Other Information:
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-gray-800 font-medium  mr-4">
            Is the product BSTI certified?
          </span>
          <label htmlFor="bsti_certification_yes" className="mr-2.5">
            <input
              type="radio"
              name="bsti"
              id="bsti_certification_yes"
              value="BSTI Certified"
              onChange={(e) => setBstiCertified(e.target.value)}
            />{" "}
            Yes
          </label>
          <label htmlFor="bsti_certification_no">
            <input
              type="radio"
              name="bsti"
              id="bsti_certification_no"
              value="BSTI Not Certified"
              onChange={(e) => setBstiCertified(e.target.value)}
            />{" "}
            No
          </label>
        </div>
        <div>
          <span className="text-gray-800 font-medium  mr-4">
            Is the product Halal certified?
          </span>
          <label htmlFor="halal_certification_yes" className="mr-2.5">
            <input
              type="radio"
              name="halal"
              id="halal_certification_yes"
              value="Halal Certified"
              onChange={(e) => setHalalCertified(e.target.value)}
            />{" "}
            Yes
          </label>
          <label htmlFor="halal_certification_no">
            <input
              type="radio"
              name="halal"
              id="halal_certification_no"
              value="Halal Not Certified"
              onChange={(e) => setHalalCertified(e.target.value)}
            />{" "}
            No
          </label>
        </div>
        <div className="col-span-2">
          <textarea
            placeholder="Additional Information"
            className="border px-4 py-2 focus:outline-none w-full text-[15px] rounded text-[#5C607B] placeholder-[#5C607B]"
            value={additionalInformation}
            onChange={(e) => setAdditionalInformation(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end mt-4 mb-2">
        <button
          type="submit"
          className="px-4 py-1.5 bg-sky-500 text-white rounded hover:bg-sky-600 transition duration-300"
        >
          Upload Product
        </button>
      </div>
    </form>
  );
};

ProductUploadForm.propTypes = {
  setFormData: PropTypes.func,
  setOpenModal: PropTypes.func,
};

export default ProductUploadForm;
