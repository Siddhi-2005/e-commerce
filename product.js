// ---- Product detail page ----

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

let qty = 1;

document.addEventListener("DOMContentLoaded", () => {
  const id = getProductIdFromUrl();
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById("detailContainer");

  if (!product) {
    container.innerHTML = `<div class="empty-state">
      <div class="display">Product not found</div>
      <p><a class="btn secondary" href="index.html">Back to catalog</a></p>
    </div>`;
    return;
  }

  document.title = product.title + " — Bazaarly";

  container.innerHTML = `
    <div class="detail-media">${product.emoji}</div>
    <div>
      <div class="detail-cat">${product.category}</div>
      <h1>${product.title}</h1>
      <div class="card-rating">⭐ ${product.rating.toFixed(1)} rating</div>
      <div class="detail-price">${formatINR(product.price)}</div>
      <p class="detail-desc">${product.desc}</p>
      <div class="qty-row">
        <div class="qty-stepper">
          <button id="qtyMinus">−</button>
          <span id="qtyValue">1</span>
          <button id="qtyPlus">+</button>
        </div>
        <button class="btn" id="addToCartBtn">Add to Cart</button>
      </div>
      <a class="btn secondary" href="cart.html">Go to Cart</a>
    </div>
  `;

  document.getElementById("qtyMinus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    document.getElementById("qtyValue").textContent = qty;
  });

  document.getElementById("qtyPlus").addEventListener("click", () => {
    qty += 1;
    document.getElementById("qtyValue").textContent = qty;
  });

  document.getElementById("addToCartBtn").addEventListener("click", () => {
    addToCart(product, qty);
    const toast = document.getElementById("toast");
    toast.innerHTML = `<span class="mark">✓</span>${qty} × ${product.title} added to cart`;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  });
});
