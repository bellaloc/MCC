// Initialize cart object
let cart = {};

// Add to cart function
function addToCart(productId, quantity) {
  if (productId in cart) {
    cart[productId] += quantity;
  } else {
    cart[productId] = quantity;
  }

  updateCartCount();
}

// Remove from cart function
function removeFromCart(productId) {
  delete cart[productId];
  updateCartCount();
}

// Update cart count display
function updateCartCount() {
  let count = 0;
  for (let productId in cart) {
    count += cart[productId];
  }

  document.getElementById('cart-count').textContent = count;
}

// Event listeners for add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
for (const button of addToCartButtons) {
  button.addEventListener('click', function (event) {
    const productId = event.target.dataset.productId;
    const quantity = 1;
    addToCart(productId, quantity);
  });
}

// Event listener for checkout button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function () {
  // Submit checkout form or handle checkout process
});
