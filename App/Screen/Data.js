/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
export const filterData = [{
  name: 'Fast food', image: require('../Assests/Images/fastfood.png'), id: 0
},
{ name: 'Pizza', image: require('../Assests/Images/pizza.png'), id: 1 },
{ name: 'Burgers', image: require('../Assests/Images/burger.png'), id: 2 },
{ name: 'HotDog', image: require('../Assests/Images/hotdog.png'), id: 3 },
{ name: 'Chinese', image: require('../Assests/Images/chinese.png'), id: 4 },
{ name: 'Mexican', image: require('../Assests/Images/mexican.png'), id: 5 },
{ name: 'Salad', image: require('../Assests/Images/salad.png'), id: 6 }
]
export const filterData2 = [{
  name: 'Fast food', image: require('../Assests/Images/fastfood.png'), id: 0
},
{ name: 'Pizza', image: require('../Assests/Images/pizza.png'), id: 1 },
{ name: 'Burgers', image: require('../Assests/Images/burger.png'), id: 2 },
{ name: 'HotDog', image: require('../Assests/Images/hotdog.png'), id: 3 },
{ name: 'Chinese', image: require('../Assests/Images/chinese.png'), id: 4 },
{ name: 'Mexican', image: require('../Assests/Images/mexican.png'), id: 5 },
{ name: 'Salad', image: require('../Assests/Images/salad.png'), id: 6 }
]
export const restaurantsData = [
  {
    restaurantName: "Mc Donalds", farAway: "21.2",
    businessAddress: "North Delhi", images: 'https://images.unsplash.com/photo-1602400236316-f5e3b6d2314c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWNkb25hbGRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
    collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 0
  },

  {
    restaurantName: "KFC", farAway: "12.7", businessAddress: "Rohini",
    images: 'https://media.istockphoto.com/id/1278823126/photo/street-advertising-at-a-kfc-store.jpg?s=612x612&w=0&k=20&c=D1ibFTTmBZIVnrbKBRB9xWtQQ3Y2K9Ah8wbOw6M17sw=',
    averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" },
    { name: "Chicken Burger", price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg" },
    ],
    id: 1
  },

  {
    restaurantName: "Pizza Hut", farAway: "5", businessAddress: "Rohini east",
    images: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg',
    coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
    discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 2
  },

  {
    restaurantName: "Domino's", farAway: "7", businessAddress: " Rohini west",
    images: 'https://www.shutterstock.com/image-photo/brighton-hove-east-sussex-england-260nw-1038060868.jpg',
    averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
    discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 3
  },
  {
    restaurantName: "Hoshiyarpuri", farAway: "21.2",
    businessAddress: "Haridwar", images: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/05/A_Tipical_Veg_North_Indian_Thali.jpg',
    averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
    collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 4
  },

  {
    restaurantName: "Ganga Lahari Restaurant", farAway: "12.7", businessAddress: "Haridwar",
    images: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/05/food-food.jpeg',
    averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" },
    { name: "Chicken Burger", price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg" },
    ],
    id: 5
  },

  {
    restaurantName: "Chotiwala", farAway: "5", businessAddress: "Rohini east",
    images: 'https://www.allrecipes.com/thmb/2Ix7TziZQ56JEVeBZ70if5QBtls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pizza-Hut-90s-Favorite-Returning-3x2-1-f6407a74cd894b2688afc7cef2877c2b.jpg',
    coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
    discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 6
  },

  {
    restaurantName: "Domino's", farAway: "7", businessAddress: " Rohini west",
    images: 'https://www.shutterstock.com/image-photo/brighton-hove-east-sussex-england-260nw-1038060868.jpg',
    averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
    discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 7
  },
]




export const restaurantsData2 = [
  {
    restaurantName: "Mc Donalds", farAway: "21.2",
    businessAddress: "North Delhi", images: 'https://thumbs.dreamstime.com/b/front-mcdonalds-mcdonald-golden-arches-shop-sign-logo-128391053.jpg',
    averageReview: 4.9, numberOfReview: 272, coordinates: { lat: -26.1888612, lng: 28.246325 }, discount: 10, deliveryTime: 15,
    collectTime: 5, foodType: "Burgers, Wraps,Milkshakes...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 0
  },

  {
    restaurantName: "KFC", farAway: "12.7", businessAddress: "Rohini",
    images: 'https://thumbs.dreamstime.com/b/australian-kfc-restaurant-melbourne-australia-take-away-chicken-suburb-box-hill-popular-chain-fast-food-55467381.jpg',
    averageReview: 4.3, numberOfReview: 306, coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20, deliveryTime: 30, collectTime: 10, foodType: "Chicken,Chicken wings... ",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" },
    { name: "Chicken Burger", price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg" },
    ],
    id: 1
  },

  {
    restaurantName: "Pizza Hut", farAway: "5", businessAddress: "Rohini east",
    images: 'https://www.allrecipes.com/thmb/2Ix7TziZQ56JEVeBZ70if5QBtls=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pizza-Hut-90s-Favorite-Returning-3x2-1-f6407a74cd894b2688afc7cef2877c2b.jpg',
    coordinates: { lat: -26.1886781, lng: 28.244879 }, averageReview: 4.9, numberOfReview: 1272,
    discount: 12, deliveryTime: 25, collectTime: 15, foodType: "Flame grilled beef Burgers",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 2
  },

  {
    restaurantName: "Domino's", farAway: "7", businessAddress: " Rohini west",
    images: 'https://www.shutterstock.com/image-photo/brighton-hove-east-sussex-england-260nw-1038060868.jpg',
    averageReview: 4.3, numberOfReview: 700, coordinates: { lat: -26.1845336, lng: 28.2481691 },
    discount: null, deliveryTime: 20, collectTime: 10, foodType: "Chicken pizza, Vegetarian pizza...",
    productData: [{ name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg" },
    { name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg" }, {
      name: "Chicken Burger",
      price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg"
    },
    ],
    id: 3
  },

]
export const productData = [{
  name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg",
  details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 0
},
{
  name: "Big Mac", price: 50.80, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg",
  details: "McFeast features two 100% fresh beef burger patties that are hot", id: 1
},
{ name: "Chicken Burger", price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg", details: "", id: 2 },

{
  name: "Hand cut chips", price: 29.30, image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg",
  details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 3
},
{
  name: "Big Mac", price: 70.20, image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg",
  details: "McFeast features two 100% fresh beef burger patties that are hot", id: 4
},
{ name: "Chicken Burger", price: 70, image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg", details: "", id: 5 },

];


export const menuData = [

  { title: "BEEF", special: false, key: 0, },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  // { title: "FRIES& CORN", special: false, key: 3 },
  //{ title: "SALADS", special: false, key: 4 },
  // { title: "HAPPY MEALS", special: false, key: 5 },
  // { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  // { title: "COLD DRINKS", special: false, key: 8 },
  //{ title: "DESSERTS", special: false, key: 9 },
  //{ title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  //{ key: 4, title: 'SHARE BOX' },
  // { key: 5, title: 'Happy Meals' },
  //{ key: 6, title: 'Fries' },
  //{ key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
]


export const menuDetailedData = [
  {
    meal: "Big Mac",
    price: 70.20,
    image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0
  },

  {
    meal: "Hand cut chips",
    price: 29.30,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1
  },

  {
    meal: "Chicken Burger",
    price: 45.70,
    image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg",
    details: "",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2
  },

  {
    meal: "Big Mac",
    price: 50.80,
    image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3
  },


  {

    meal: "Hand cut chips",
    price: 29.30,
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",

    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],

    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4
  },

  {
    meal: "Big Mac",
    price: 70.20,
    image: "https://img.delicious.com.au/iJhIRNQj/del/2016/05/the-big-mac-30773-1.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5
  },

];
export const menuItems = [
  {
    id: 1,
    name: 'Burger',
    description: 'Delicious beef patty with fresh veggies',
    price: 9.99,
    image: require('../Assests/Images/burger.png'),
  },
  {
    id: 2,
    name: 'Pizza',
    description: 'Tasty pizza with your favorite toppings',
    price: 12.99,
    image: require('../Assests/Images/pizza.png'),
  },

];





export const ChickenDetails = [
  {
    meal: 'McSpicy Chicken Burger',
    price: 70.2,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/09/mcspicy-chicken-burger-1.jpg',
    details:
      'McFeast features two 100% fresh McSpicy Ckicken burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 13 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 15 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 21 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 23 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 30 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 31 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 32 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 33 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'McChicken Burger',
    price: 110,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/09/mcChicken-burger-1.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Chicken Maharaja Mac',
    price: 150,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/09/maharaja-mac-1.jpg',
    details:
      'The McSpicy Fried Chicken is just what you should order to eat chicken like a boss',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Cheese Lava American Chicken Burger',
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/09/cheese-lava-1.jpg',
    price: 100,
    details: 'McFeast features two 100% fresh beef burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Chicken Kebab Burger',
    price: 70,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/09/chicken-kebab-2.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },
];

export const MilkShakesData = [
  {
    meal: 'Iced Latte',
    price: 70.2,
    image: 'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Iced-Latte-Reg:product-header-desktop?wid=830&hei=454&dpr=off',
    details:
      'Latte drink served over ice. New recipe.',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 13 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 15 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 21 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 23 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 30 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 31 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 32 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 33 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'Strawberries & Cream Frappé',
    price: 110,
    image:
      'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-regular-strawcreamfrappe-Reg:product-header-desktop?wid=829&hei=455&dpr=off',
    details: 'Strawberry and Vanilla flavour base blended with ice, topped with cream and a sugar dusting. Not available via McDelivery®.',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Mango & Pineapple Smoothie',
    price: 150,
    image:
      'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-regular-mangopineapplesmoothie:product-header-desktop?wid=829&hei=455&dpr=off',
    details:
      'Deliciously refreshing smoothie blended with ice',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Coca-Cola® Zero Sugar',
    image:
      'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Coca-Cola-Zero-Sugar-Medium-new-updated:product-header-desktop?wid=829&hei=455&dpr=off',
    price: 100,
    details:
      'Zero calories, zero sugar, same great Coca-Cola taste. Perfect with your meal, or as a refreshing drink.',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Fanta® Orange',
    price: 70,
    image:
      'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Fanta-Orange-Medium-2:product-header-desktop?wid=829&hei=455&dpr=off',
    details: 'Unlock the taste of delicious Fanta Orange. Perfect with your meal or on its own.',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Banana Milkshake',
    price: 70,
    image:
      'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Banana-Milkshake-Medium-2:product-header-desktop?wid=829&hei=455&dpr=off',
    details: 'Our banana milkshake is a firm favourite. It’s sweet and delicious.',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Tropicana® Orange Juice',
    price: 70,
    image:
      'https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Tropicana-Orange-Juice-2:product-header-desktop?wid=829&hei=455&dpr=off',
    details:
      'A bottle of real orange juice thats great with your meal.',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },
];






export const VeggieData = [
  {
    meal: 'American Cheese Supreme Veg Burger',
    price: 70.2,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/American-Cheese-supreme-veg-burger-1.jpg',
    details:
      'McFeast features two 100% fresh McSpicy Veg burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 10 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 11 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 13 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 14 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 15 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 21 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 22 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 23 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 30 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 31 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 32 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 33 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 34 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0,
  },

  {
    meal: 'McVeggie Burger',
    price: 110,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/McVeggie-burger-1.jpg',
    details: 'Two 100% fresh beef burger patties that are hot,deliciously',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1,
  },

  {
    meal: 'Mexican McAloo Tikki Burger',
    price: 150,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/Mexican-aloo-tikki-1.jpg',
    details:
      'The McSpicy Tikki Burger is just what you should order to eat burger like a boss',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2,
  },

  {
    meal: 'Cheesy Nugget – Veg Bites',
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/cheese-bites-1.jpg',
    price: 100,
    details:
      'McFeast features two 100% fresh Cheesy burger patties that are hot',
    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],
    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3,
  },

  {
    meal: 'Masala Wedges',
    price: 70,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/masala-wedges-1.jpg',
    details: 'Two 100% fresh Masala Wedges that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'Big Spicy Paneer Wrap',
    price: 70,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/Big-Spicy-Paneer-Wrap-1.jpg',
    details: 'Two 100% Big Spicy Paneer Wrap that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },

  {
    meal: 'McSpicy Premium Veg Burger',
    price: 70,
    image:
      'https://mcdonaldsblog.in/wp-content/uploads/2021/08/McSpicy-Premium-Veg-Burger-1.jpg',
    details:
      'Two 100% fresh McSpicy Premium Veg Burger that are hot,deliciously',

    preferenceTitle: [
      'Choose your 2 dips',
      'Choose your 1st drink flavour',
      'Choose your 2nd drink flavour',
      'Would you like to add a side?',
      'Would you Like any extra sauce?',
    ],

    preferenceData: [
      [
        { name: 'Jalapeno Dip', price: 8.91, checked: false, id: 0 },
        { name: 'Sweet & Sour Dip', price: 8.75, checked: false, id: 1 },
        { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [
        { name: 'debonairs sauce', price: 8.9, checked: false, id: 0 },
        { name: 'BBQ Sauce', price: 8.9, checked: false, id: 1 },
        { name: 'Tikka Sauce', price: 11.9, checked: false, id: 2 },
      ],

      [
        { name: 'Small Coke', price: 8.9, checked: false, id: 0 },
        { name: 'Small Fanta Orange', price: 8.9, checked: false, id: 1 },
        { name: 'Small Sprite', price: 11.9, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 },
        { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 },
        { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 },
        { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
        { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4,
  },
];
export const coupons = [
  { code: 'SUMMER50', discount: 20, expiration: '2023-08-31' },
  { code: 'FREESHIP', discount: 10, expiration: '2023-12-31' },
];
