import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import {
  generateBatchNumber,
  generateExpireDate,
  generateProductionDate,
} from "../../utils";

const ConfirmationModal = ({ openModal, setOpenModal, formValue }) => {
  const qrData = JSON.stringify(formValue);

  return (
    <div className="mx-auto w-fit">
      <button
        onClick={() => setOpenModal(true)}
        className="rounded-md bg-sky-500 px-5 py-[6px] text-white"
      >
        Open
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "visible opacity-100" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`text- absolute max-w-md w-full rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <h1 className="mb-5 text-2xl font-semibold text-center">
            QR Code has been generated!
          </h1>
          <div className="w-fit mx-auto mb-4">
            <QRCode size={180} value={qrData} />
          </div>
          <div>
            <p>
              <span className="text-gray-800 font-medium">Batch No:</span>{" "}
              {generateBatchNumber()}
            </p>
            <p>
              <span className="text-gray-800 font-medium">
                Production Date:
              </span>{" "}
              {generateProductionDate()}
            </p>
            <p>
              <span className="text-gray-800 font-medium">
                Expiration Date:{" "}
              </span>

              {generateExpireDate(parseInt(formValue?.productValidityPeriod))}
            </p>
          </div>
          <div className="flex justify-end gap-2.5 mt-3">
            <button
              onClick={() => setOpenModal(false)}
              className="rounded-md border border-rose-600 px-4 py-[6px] text-rose-600 duration-300 hover:bg-rose-600 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={() => setOpenModal(false)}
              className="rounded-md border bg-green-600 px-4 py-[6px] text-white hover:bg-green-700 transition duration-300"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  formValue: PropTypes.object,
};

export default ConfirmationModal;
