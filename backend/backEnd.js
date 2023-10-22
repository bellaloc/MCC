/
// Import dependencies
const express = require('express');
const app = express();
const mysql = require('mysql2');
const lowline = require('lowline.ai');

// Connect to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Import route handlers
const cartRoutes = require('./src/backend/models/cartRoutes');
const productRoutes = require('./src/backend/models/productRoutes');

// Mount route handlers
app.use('/api/cart', cartRoutes);
app.use('/api/products', productRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


/ Example API endpoint for retrieving product data
app.get('/api/products', async (req, res) => {
    const products = await getProductsFromDatabase(); // Replace with your data retrieval logic
    res.json(products);
  });
  
  // Example API endpoint for adding items to cart
  app.post('/api/cart/add', async (req, res) => {
    const productId = req.body.productId;
    const quantity = req.body.quantity;
  
    // Add item to cart and update cart data
    await addToCart(productId, quantity);
  
    res.json({ message: 'Item added to cart' });
  });
  
  // Example API endpoint for processing checkout
  app.post('/api/checkout', async (req, res) => {
    const orderDetails = req.body; // Retrieve order details from request body
  
    // Validate user input, calculate order totals, and integrate with payment gateway API
    const paymentResponse = await processPayment(orderDetails);
  
    if (paymentResponse.success) {
      // Payment successful, handle order confirmation and notifications
      res.json({ message: 'Order processed successfully' });
    } else {
      // Payment failed, handle error and inform user
      res.status(400).json({ message: 'Payment failed' });
    }
  });
  