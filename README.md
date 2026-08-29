Bazaarly — Mini E-Commerce Product Catalog

A front-end product catalog app built as Task 5 of the Full Stack Web Development Internship at Maincrafts Technology. Built with plain HTML, CSS, and JavaScript — no frameworks, no backend, no build step.





✨ Features
Product listing page — grid layout with image, name, price, and category
Search bar — filters products dynamically by name as you type
Category filter — sidebar with live product counts per category
Sorting — price (low→high / high→low), name (A→Z / Z→A), rating
Pagination — 8 products per page
Product detail page — full description, quantity selector, add to cart
Cart system — add, update quantity, remove items, all persisted via localStorage
Dedicated cart page — subtotal, shipping, and total
Responsive design — works down to mobile screens
🛠️ Tech Stack
HTML5
CSS3 (custom design system, no framework)
Vanilla JavaScript (ES6)
Browser localStorage for cart persistence
📁 Project Structure
product-catalog/
├── index.html          # Product listing / catalog page
├── product.html        # Product detail page
├── cart.html           # Cart page
├── css/
│   └── style.css       # All styling
├── js/
│   ├── data.js         # Product data (24 sample products)
│   ├── app.js          # Shared cart/localStorage helpers
│   ├── catalog.js       # Search, filter, sort, pagination logic
│   ├── product.js       # Product detail page logic
│   └── cart.js          # Cart page logic
└── README.md
🚀 Getting Started
Option 1: VS Code Live Server
Open this folder in VS Code
Install the Live Server extension (by Ritwick Dey)
Right-click index.html → Open with Live Server
Option 2: Any local server
bash
python3 -m http.server 8000
# then open http://localhost:8000

No installs, no npm install — it's plain static files.

📚 What I Learned
Structuring front-end state (search + filter + sort + pagination working together)
Persisting data client-side with localStorage
Building multi-page vanilla JS apps without a framework
Writing a small, reusable component-style CSS system
📌 Possible Improvements
Price range slider
Wishlist / favorites
Skeleton loading states
Dark mode
