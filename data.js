// ---- Product Catalog Data ----
// In a real app this would come from a backend API.
// Here it's a static array so the app runs with zero setup.

const PRODUCTS = [
  { id: 1,  title: "Smart Headphones",        price: 2999, category: "Electronics", rating: 4.3, emoji: "🎧", desc: "Over-ear wireless headphones with active noise cancellation and 30-hour battery life." },
  { id: 2,  title: "Running Shoes",            price: 1599, category: "Fashion",     rating: 4.1, emoji: "👟", desc: "Lightweight breathable running shoes with cushioned soles for daily training." },
  { id: 3,  title: "4K Action Camera",         price: 6499, category: "Electronics", rating: 4.5, emoji: "📷", desc: "Waterproof 4K action camera with image stabilization, perfect for travel and sports." },
  { id: 4,  title: "Organic Basmati Rice 5kg", price: 649,  category: "Grocery",     rating: 4.6, emoji: "🌾", desc: "Aged, aromatic basmati rice grown without synthetic pesticides." },
  { id: 5,  title: "Denim Jacket",              price: 2199, category: "Fashion",     rating: 4.0, emoji: "🧥", desc: "Classic fit denim jacket, stonewashed for a lived-in look." },
  { id: 6,  title: "Cold Press Coconut Oil 1L", price: 399,  category: "Grocery",     rating: 4.4, emoji: "🥥", desc: "Unrefined, cold-pressed coconut oil for cooking and skincare." },
  { id: 7,  title: "Mechanical Keyboard",       price: 3499, category: "Electronics", rating: 4.7, emoji: "⌨️", desc: "Hot-swappable mechanical keyboard with hybrid tactile switches." },
  { id: 8,  title: "Ceramic Dinner Set",        price: 1899, category: "Home",        rating: 4.2, emoji: "🍽️", desc: "16-piece glazed ceramic dinner set, microwave and dishwasher safe." },
  { id: 9,  title: "Cotton Bedsheet Set",       price: 1099, category: "Home",        rating: 4.3, emoji: "🛏️", desc: "300-thread-count cotton bedsheet with two matching pillow covers." },
  { id: 10, title: "Vitamin C Serum",           price: 599,  category: "Beauty",      rating: 4.5, emoji: "🧴", desc: "20% Vitamin C brightening serum for daily use, lightweight and non-greasy." },
  { id: 11, title: "Leather Wallet",            price: 899,  category: "Fashion",     rating: 4.1, emoji: "👛", desc: "Genuine leather bifold wallet with RFID-blocking card slots." },
  { id: 12, title: "Smartwatch Series X",       price: 4999, category: "Electronics", rating: 4.4, emoji: "⌚", desc: "Fitness-focused smartwatch with heart rate, SpO2, and sleep tracking." },
  { id: 13, title: "Herbal Green Tea Box",      price: 349,  category: "Grocery",     rating: 4.2, emoji: "🍵", desc: "25 sachets of herbal green tea blended with tulsi and lemongrass." },
  { id: 14, title: "Aroma Diffuser",             price: 1299, category: "Home",        rating: 4.0, emoji: "🕯️", desc: "Ultrasonic aroma diffuser with 7-color ambient LED lighting." },
  { id: 15, title: "Matte Lipstick Combo",       price: 449,  category: "Beauty",      rating: 4.3, emoji: "💄", desc: "Set of 3 long-lasting matte lipsticks in everyday shades." },
  { id: 16, title: "Wireless Mouse",             price: 799,  category: "Electronics", rating: 4.2, emoji: "🖱️", desc: "Silent-click wireless mouse with adjustable DPI settings." },
  { id: 17, title: "Formal Shirt",               price: 999,  category: "Fashion",     rating: 3.9, emoji: "👔", desc: "Slim-fit formal shirt in wrinkle-resistant cotton blend." },
  { id: 18, title: "Whole Wheat Atta 10kg",      price: 549,  category: "Grocery",     rating: 4.6, emoji: "🌾", desc: "Stone-ground whole wheat flour, rich in fibre." },
  { id: 19, title: "Table Lamp",                 price: 1199, category: "Home",        rating: 4.1, emoji: "💡", desc: "Adjustable wooden-base table lamp with warm white LED bulb." },
  { id: 20, title: "Sunscreen SPF 50",           price: 379,  category: "Beauty",      rating: 4.4, emoji: "🧴", desc: "Broad-spectrum SPF 50 sunscreen, non-sticky matte finish." },
  { id: 21, title: "Bluetooth Speaker",          price: 1799, category: "Electronics", rating: 4.3, emoji: "🔊", desc: "Portable Bluetooth speaker with 12-hour playback and deep bass." },
  { id: 22, title: "Yoga Mat",                   price: 699,  category: "Fashion",     rating: 4.5, emoji: "🧘", desc: "Non-slip 6mm yoga mat with carry strap." },
  { id: 23, title: "Almonds 1kg",                price: 899,  category: "Grocery",     rating: 4.7, emoji: "🥜", desc: "Premium California almonds, hand-sorted and vacuum packed." },
  { id: 24, title: "Storage Ottoman",            price: 2499, category: "Home",        rating: 4.0, emoji: "🪑", desc: "Foldable storage ottoman with cushioned lid, doubles as a footrest." }
];

const CATEGORIES = ["All", ...new Set(PRODUCTS.map(p => p.category))];
