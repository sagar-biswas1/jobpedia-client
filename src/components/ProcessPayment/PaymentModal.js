import React from "react";
import Modal from "react-modal";
import ProcessPayment from "./ProcessPayment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "rgb(143 255 207)",
  },
};

Modal.setAppElement("#root");
const PaymentModal = ({ modalIsOpen, closeModal, orderDetails }) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div onClick={closeModal} style={{ width: 30, marginLeft: "auto" }}>
          <i className="bi bi-x-circle p-3 m-2 text-danger"></i>
        </div>

        <ProcessPayment orderDetails={orderDetails} />
      </Modal>
    </div>
  );
};

export default PaymentModal;
