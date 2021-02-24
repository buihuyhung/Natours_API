import axios from "axios";
import { showAlert } from "./alearts";
import Stripe from "stripe";
const stripe = Stripe("pk_test_FpReaUifH3BcP6fvA4n8fJ0000RP0pQKtx");

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:5000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};
