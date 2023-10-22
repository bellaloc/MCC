// product.js

function addToCart(event) {
    const productId = event.target.dataset.productId;
    const productName = event.target.dataset.productName;
    const productPrice = event.target.dataset.productPrice;
  
    // Add product to cart
    console.log(`Adding ${productName} (ID: ${productId}) to cart at $${productPrice}`);
  
    // Update cart count display
    const cartCountElement = document.getElementById('cart-count');
    const currentCount = parseInt(cartCountElement.textContent);
    cartCountElement.textContent = currentCount + 1;
  }
  let cart = {}; // Initialize an empty cart object

  function addToCart(productId, quantity) {
    // Add product to cart
    if (cart[productId]) {
      cart[productId] += quantity;
    } else {
      cart[productId] = quantity;
    }
  
    // Update cart count display
    const cartCountElement = document.getElementById('cart-count');
    const currentCount = parseInt(cartCountElement.textContent);
    cartCountElement.textContent = currentCount + quantity;
  }
  