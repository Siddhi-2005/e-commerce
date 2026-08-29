// ---- Cart page ----

function renderCartPage() {
  const cart = getCart();
  const layout = document.getElementById("cartLayout");

  if (cart.length === 0) {
    layout.innerHTML = `<div class="empty-cart">
      <div class="display" style="font-size:1.3rem; margin-bottom:8px; color:var(--ink);">Your cart is empty</div>
      <p>Looks like you haven't added anything yet.</p>
      <a class="btn" href="index.html">Browse products</a>
    </div>`;
    return;
  }

  const itemsHtml = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-media">${item.emoji}</div>
      <div>
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-price">${formatINR(item.price)} each</div>
      </div>
      <div class="qty-stepper">
        <button data-action="dec" data-id="${item.id}">−</button>
        <span>${item.qty}</span>
        <button data-action="inc" data-id="${item.id}">+</button>
      </div>
      <button class="btn danger" data-action="remove" data-id="${item.id}">Remove</button>
    </div>
  `).join("");

  const subtotal = cartTotalPrice();
  const shipping = subtotal > 0 && subtotal < 999 ? 49 : 0;
  const total = subtotal + shipping;

  layout.innerHTML = `
    <div>${itemsHtml}</div>
    <div class="summary-card">
      <h3 style="margin-bottom:14px;">Order Summary</h3>
      <div class="summary-row"><span>Items (${cartTotalItems()})</span><span>${formatINR(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? "Free" : formatINR(shipping)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatINR(total)}</span></div>
      <button class="btn full" style="margin-top:14px;" onclick="alert('This is a demo checkout — no payment is processed.')">Checkout</button>
      <a class="btn secondary full" style="margin-top:10px; display:block; text-align:center;" href="index.html">Continue Shopping</a>
    </div>
  `;

  layout.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const action = btn.dataset.action;
      const item = getCart().find(i => i.id === id);
      if (!item) return;

      if (action === "inc") updateCartQty(id, item.qty + 1);
      if (action === "dec") updateCartQty(id, item.qty - 1);
      if (action === "remove") removeFromCart(id);

      renderCartPage();
    });
  });
}

document.addEventListener("DOMContentLoaded", renderCartPage);
