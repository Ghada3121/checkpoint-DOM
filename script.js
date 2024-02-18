var Items = {
  item1: { name: "Item 1", quantity: 0, price: 10 /*liked: false*/ },
  item2: { name: "Item 2", quantity: 0, price: 15 /*liked: false*/ },
  item3: { name: "Item 3", quantity: 0, price: 20 /*liked: false*/ },
};

function updateTotalPrice() {
  let totalPrice = 0;
  for (let item in Items) {
    totalPrice += Items[item].quantity * Items[item].price;
  }
  document.getElementById("total-price").textContent = "$" + totalPrice;
}

function updateQuantity(itemId, quantity) {
  document.getElementById("quantity-" + itemId).textContent = quantity;
  updateTotalPrice();
}

function moreQuantity(itemId) {
  Items[itemId].quantity++;
  updateQuantity(itemId, Items[itemId].quantity);
}

function lessQuantity(itemId) {
  if (Items[itemId].quantity > 0) {
    Items[itemId].quantity--;
    updateQuantity(itemId, Items[itemId].quantity);
  }
}

function deleteItem(itemId) {
  delete Items[itemId];
  document.getElementById(itemId).remove();
  updateTotalPrice();
}

function toggleLike(itemId) {
  Items[itemId].liked = !Items[itemId].liked;
  let likeButton = document
    .getElementById(itemId)
    .getElementsByClassName("like-button")[0];
  if (Items[itemId].liked) {
    likeButton.classList.add("liked");
  } else {
    likeButton.classList.remove("liked");
  }
}
