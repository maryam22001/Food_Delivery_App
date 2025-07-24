// Static data for restaurants and categories
export const featuredRestaurants = [
  {
    id: 1,
    name: "The Italian Corner",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 1250,
    deliveryTime: "25-35 min",
    deliveryFee: "Free delivery",
    discount: "20% OFF",
    featured: true,
    emoji: "🍝"
  },
  {
    id: 2,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.6,
    reviews: 890,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.99",
    emoji: "🍔"
  },
  {
    id: 3,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.9,
    reviews: 2100,
    deliveryTime: "30-40 min",
    deliveryFee: "Free delivery",
    isNew: true,
    featured: true,
    emoji: "🍣"
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.7,
    reviews: 650,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    emoji: "🌮"
  },
  {
    id: 5,
    name: "Green Garden",
    cuisine: "Healthy",
    rating: 4.5,
    reviews: 420,
    deliveryTime: "20-30 min",
    deliveryFee: "Free delivery",
    discount: "15% OFF",
    emoji: "🥗"
  },
  {
    id: 6,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.4,
    reviews: 780,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.49",
    emoji: "🥡"
  }
];

export const categories = [
  { name: "Pizza", count: "120+ restaurants", emoji: "🍕" },
  { name: "Burgers", count: "85+ restaurants", emoji: "🍔" },
  { name: "Sushi", count: "45+ restaurants", emoji: "🍣" },
  { name: "Mexican", count: "65+ restaurants", emoji: "🌮" },
  { name: "Asian", count: "90+ restaurants", emoji: "🥢" },
  { name: "Desserts", count: "35+ restaurants", emoji: "🍰" },
  { name: "Healthy", count: "55+ restaurants", emoji: "🥗" },
  { name: "Coffee", count: "25+ restaurants", emoji: "☕" }
];
