import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from "../CardForm/CardForm";


const stripePromise = loadStripe('pk_test_51IjgyyBcYELePn5MjdLgKw9GFpGbc81SF4vVOMzURiIvYkVEGDXCcgpgZazWjnSs9Ns7RvK2tJ4QhGH1RE3lV3hS0044DVCGtd');
const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePayment={handlePayment}/>
        </Elements>
    );
};

export default ProcessPayment;