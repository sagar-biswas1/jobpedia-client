import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useHistory } from "react-router";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: 17,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentModal = ({ orderDetails }) => {
  let history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (payload.error) {
      setMessage(payload.error.message);
    } else {
      const paymentMethod = payload.paymentMethod;
      setMessage(payload.paymentMethod.message);
      submitOrder(paymentMethod.id, paymentMethod.card, paymentMethod.type);
    }
  };
  const submitOrder = (paymentId, cardInfo, paymentType) => {
    console.log({
      ...orderDetails,
      paymentId,
      cardInfo,
      paymentType,
    });

    axios
      .post("https://afternoon-shelf-00792.herokuapp.com/add-employer", {
        ...orderDetails,
        paymentId,
        cardInfo,
        paymentType,
      })
      .then(function (response) {
        console.log(response);
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>{message}</div>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center payment-form "
      >
        <label className="w-100">
          Card number
          <CardNumberElement />
        </label>
        <label className="w-100">
          Expiration date
          <CardExpiryElement options={options} />
        </label>
        <label className="w-100">
          CVC
          <CardCvcElement options={options} />
        </label>

        <button type="submit" disabled={!stripe} className="btn btn-info m-4">
          {`Pay $ ${orderDetails.price}`}
        </button>
      </form>
    </div>
  );
};

export default PaymentModal;
