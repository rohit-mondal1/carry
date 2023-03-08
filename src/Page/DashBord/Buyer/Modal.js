import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Modal = ({ modal, htmlFor,refetch, setModal }) => {
  const { price, _id } = modal;
  const [errord, setErrord] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // fetch
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://12-sarver-rahul-sarker18.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setErrord(error.message);
    } else {
      setErrord("");
    }

    const { paymentIntent, error: errors } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: "_id",
          },
        },
      }
    );

    if (errors) {
      setErrord(error?.message);
    }
    

    if (paymentIntent?.status) {
      fetch(`https://12-sarver-rahul-sarker18.vercel.app/booking/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            setModal(null);
            toast.success("success full payment !!");
          }
        });
    }
  };

  const handelColge = () => {
    setModal(null);
  };
  return (
    <div>


      <form className="w-[400px] mx-auto  p-4" onSubmit={handleSubmit}>
        <h1
          onClick={handelColge}
          className=" btn justify-end ml-[315px] text-2xl font-bold "
        >
          ✕
        </h1>
        <CardElement
          className="border-2 mt-5 p-3 rounded-sm"
          options={{
            style: {
              base: {
                fontSize: "16px",
                border: "black solid 2px",
                color: "#FF0000",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#FF0000",
              },
            },
          }}
        />
        <button
          className="w-full mt-3 text-center btn btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-red-600">{errord}</p>
      </form>
    </div>
   
  );
};

export default Modal;
