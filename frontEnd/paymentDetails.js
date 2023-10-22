const square = require('square');

const squareOptions = {
  // Replace with your Square API keys and credentials
  accessToken: 'YOUR_SQUARE_ACCESS_TOKEN',
  locationId: 'YOUR_SQUARE_LOCATION_ID',
};

const squareClient = square(squareOptions);

async function processPayment(paymentDetails) {
  const paymentAmount = paymentDetails.amount;
  const idempotencyKey = paymentDetails.idempotencyKey;

  try {
    const createPaymentResponse = await squareClient.payments.createPayment({
      amountMoney: {
        amount: paymentAmount,
        currency: 'USD',
      },
      sourceId: paymentDetails.nonce,
      idempotencyKey: idempotencyKey,
    });

    if (createPaymentResponse.payment && createPaymentResponse.payment.status === 'APPROVED') {
      // Payment successful, handle order confirmation and notifications
      console.log('Payment successful');
    } else {
      // Payment failed, handle error and inform user
      console.error('Payment failed');
    }
  } catch (error) {
    console.error('Payment error:', error);
  }
}

//or

const paypal = require('paypal-rest-sdk');

const paypalOptions = {
  // Replace with your PayPal API credentials
  clientId: 'YOUR_PAYPAL_CLIENT_ID',
  clientSecret: 'YOUR_PAYPAL_CLIENT_SECRET',
};

const paypalClient = paypal.configure(paypalOptions);

async function processPayment(paymentDetails) {
  const paymentAmount = paymentDetails.amount;
  const currency = paymentDetails.currency;
  const description = paymentDetails.description;

  try {
    const createPaymentResponse = await paypalClient.payment.create({
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      transactions: [{
        amount: {
          total: paymentAmount,
          currency: currency,
        },
        description: description,
      }],
    });

    if (createPaymentResponse.state === 'approved') {
      // Payment successful, handle order confirmation and notifications
      console.log('Payment successful');
    } else {
      // Payment failed, handle error and inform user
      console.error('Payment failed');
    }
  } catch (error) {
    console.error('Payment error:', error);
  }
}
