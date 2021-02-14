import axios from "axios";

// URL for deployed cloudfunction
const instance = axios.create({
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-4b2b2/us-central1/api",
  // "http://localhost:9500/stripe-checkout-test-5fcb8/us-central1/api",
  // "https://us-central1-stripe-checkout-test-5fcb8.cloudfunctions.net/api",
});

export default instance;
