// ---- Catalog page: search + filter + sort + pagination ----

const PAGE_SIZE = 8;

let state = {
  search: "",
  category: "All",
  sortBy: "default",
  page: 1
};

function applyFilters() {
  let results = PRODUCTS.slice();

  // Search (by title)
  if (state.search.trim()) {
    const term = state.search.trim().toLowerCase();
    results = results.filter(p => p.title.toLowerCase().includes(term));
  }

  // Category filter
  if (state.category !== "All") {
    results = results.filter(p => p.category === state.category);
  }

  // Sorting
  switch (state.sortBy) {
    case "price-asc":
      results.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      results.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      results.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      results.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "rating-desc":
      results.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break; // keep original order
  }

  return results;
}

function renderCategoryList() {
  const el = document.getElementById("categoryList");
  el.innerHTML = CATEGORIES.map(cat => {
    const count = cat === "All"
      ? PRODUCTS.length
      : PRODUCTS.filter(p => p.category === cat).length;
    const active = cat === state.category ? "active" : "";
    return `<li><button class="${active}" data-cat="${cat}">
      <span>${cat}</span><span class="count">${count}</span>
    </button></li>`;
  }).join("");

  el.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      state.category = btn.dataset.cat;
      state.page = 1;
      render();
    });
  });
}

function renderGrid(results) {
  const grid = document.getElementById("productGrid");
  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = results.slice(start, start + PAGE_SIZE);

  if (pageItems.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="display">No products found</div>
      <p>Try a different search term or clear the filters.</p>
    </div>`;
    return;
  }

  grid.innerHTML = pageItems.map(p => `
    <div class="card">
      <a class="card-media" href="product.html?id=${p.id}">${p.emoji}</a>
      <div class="card-body">
        <div class="card-cat">${p.category}</div>
        <div class="card-title"><a href="product.html?id=${p.id}">${p.title}</a></div>
        <div class="card-rating">⭐ ${p.rating.toFixed(1)}</div>
        <div class="card-footer">
          <span class="price-tag">${formatINR(p.price)}</span>
          <button class="btn add-btn" data-id="${p.id}">Add</button>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const product = PRODUCTS.find(p => p.id === Number(btn.dataset.id));
      addToCart(product, 1);
      showToast(`${product.title} added to cart`);
    });
  });
}

function renderPagination(totalResults) {
  const totalPages = Math.max(1, Math.ceil(totalResults / PAGE_SIZE));
  if (state.page > totalPages) state.page = totalPages;

  const el = document.getElementById("pagination");
  if (totalPages <= 1) { el.innerHTML = ""; return; }

  let buttons = "";
  buttons += `<button data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""}>‹</button>`;

  for (let i = 1; i <= totalPages; i++) {
    buttons += `<button data-page="${i}" class="${i === state.page ? "active" : ""}">${i}</button>`;
  }

  buttons += `<button data-page="${state.page + 1}" ${state.page === totalPages ? "disabled" : ""}>›</button>`;
  el.innerHTML = buttons;

  el.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = Number(btn.dataset.page);
      if (target >= 1 && target <= totalPages) {
        state.page = target;
        render();
        window.scrollTo({ top: document.getElementById("productGrid").offsetTop - 90, behavior: "smooth" });
      }
    });
  });
}

function renderResultCount(count) {
  document.getElementById("resultCount").textContent =
    `${count} product${count !== 1 ? "s" : ""} found`;
}

function render() {
  const results = applyFilters();
  renderResultCount(results.length);
  renderGrid(results);
  renderPagination(results.length);
  renderCategoryList();
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerHTML = `<span class="mark">✓</span>${msg}`;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategoryList();
  render();

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    state.page = 1;
    render();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    state.page = 1;
    render();
  });
});
