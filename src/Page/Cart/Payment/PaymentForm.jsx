import React from 'react';
import Payment from './Payment';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';

function PaymentForm() {
  
  const stripePromise = loadStripe('pk_test_51LsWNvSA7jorJbwppB8jwHGx5ew2W6Xyg1ZvfX3qEBM4S1Mq4HnVMe8ZfNoz7PDi1PZzQIKVn9sz1yaPV3jhRVco00jVYoSPrK')
  return (
    <Elements stripe={stripePromise}>
        <Payment />
    </Elements>
   )
}

export default PaymentForm