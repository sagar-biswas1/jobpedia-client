import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51IhG0xFGEbV3SPCVbu4RK2eX28Sdk60ifKEGCk2PjqvWTkmqJFjaYgeyy7dLhOE8UccaxPpkxlwj27LytX1jsN0K00jnV1Q39l"
);
const ProcessPayment = ({ orderDetails }) => {
  return (
    <div className="AppWrapper" style={{ minWidth: 280 }}>
      <Elements stripe={stripePromise}>
        <CheckOutForm orderDetails={orderDetails} />
      </Elements>{" "}
    </div>
  );
};

export default ProcessPayment;
