// ---- Shared cart storage helpers (used across all pages) ----

const CART_KEY = "cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(item => item.id === product.id);
  if (idx !== -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      emoji: product.emoji,
      category: product.category,
      qty: qty
    });
  }
  saveCart(cart);
}

function updateCartQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  } else {
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) cart[idx].qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function cartTotalItems() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function cartTotalPrice() {
  return getCart().reduce((sum, item) => sum + item.qty * item.price, 0);
}

function formatINR(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const count = cartTotalItems();
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
