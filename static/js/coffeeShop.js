"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// adds item to cart with no price

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

// emptyies the cart removes the items not removing the cart

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// put in a number to be the cart total

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

//  tells how many cups of coffee sold over time

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};

// status bar and message


//
// Add your event handlers below.
//

const addToCartButton = $('.add-to-order');

addToCartButton.on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

$('#place-order').on('click', () => {
  const number = $('#cart-items').children().length;
  incrementCoffeeSold(number);
  resetCart();
});