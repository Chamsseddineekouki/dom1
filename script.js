document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.querySelectorAll('.cart-item');
  const cartTotal = document.getElementById('cart-total');

  cartItems.forEach(item => {
    const quantityInput = item.querySelector('.quantity');
    const increaseBtn = item.querySelector('.increase');
    const decreaseBtn = item.querySelector('.decrease');
    const removeBtn = item.querySelector('.remove-btn');
    const likeBtn = item.querySelector('.like-btn');
    const totalPriceElem = item.querySelector('.total-price');
    const productPrice = parseFloat(item.querySelector('.product-price').dataset.price);

    // Update total price based on quantity
    const updateTotalPrice = () => {
      const quantity = parseInt(quantityInput.value);
      const total = (productPrice * quantity).toFixed(2);
      totalPriceElem.textContent = `$${total}`;
      updateCartTotal();
    };

    // Increase quantity
    increaseBtn.addEventListener('click', () => {
      quantityInput.value = parseInt(quantityInput.value) + 1;
      updateTotalPrice();
    });

    // Decrease quantity
    decreaseBtn.addEventListener('click', () => {
      if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateTotalPrice();
      }
    });

    // Remove item from cart
    removeBtn.addEventListener('click', () => {
      item.remove();
      updateCartTotal();
    });

    // Toggle like status
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('liked');
    });

    // Update total price on quantity change
    quantityInput.addEventListener('change', updateTotalPrice);

    // Initialize total price
    updateTotalPrice();
  });

  // Update overall cart total
  function updateCartTotal() {
    let total = 0;
    document.querySelectorAll('.total-price').forEach(priceElem => {
      total += parseFloat(priceElem.textContent.replace('$', ''));
    });
    cartTotal.textContent = total.toFixed(2);
  }
});
