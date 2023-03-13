import Lekki from "../images/lekki.jpg";
import Flat from "../images/flat.jpg";
import Flat2 from "../images/flat2.jpg";
import Land from "../images/land.jpg";

export const city = [{
  city:'lagos',
  areas:[
    {
      area:'ago_palace',
      label:'ago palace'
    },
    {
      area:'ikeja',
      label:'ikeja'
    },
    {
      area:'lagos_island',
      label:'lagos island'
    },
    {
      area:'ketu',
      label:'ketu'
    },
    {
      area:'yaba',
      label:'yaba'
    },
    {
      area:'mile_2',
      label:'mile 2'
    },
  ]},{
  city:'ibadan',

  areas:[
    {
      area:'bodija',
      label:'bodija'
    },
    {
      area:'iyana_church',
      label:'iyana church'
    },
    {
      area:'challenge',
      label:'challenge'
    },
    {
      area:'community',
      label:'community'
    },
  
  ]},{
  city:'abuja',

  areas:[
    {
      area:'maitama',
      label:'maitama'
    },
    {
      area:'fagge',
      label:'fagge'
    },
    {
      area:'govt_road',
      label:'govt road'
    }
  ]
},
]

export const propertiesData = [
  {
    id: "100",
    title: "2 Bedroom flat",
    didNo: "e0eo21",
    price: 10000000,
    priceTicker: "year",
    active:true,
    propertyFeatures: [
      {
        room: 2,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: true,
        ensuite: true,
        swimmingPool: true,
      },
    ],
    propertyAmenities: [
      "air_condition",
      "gym",
      "microwave",
      "laundry",
      "parking",
    ],
    location: "ibadan",
    address: "No 12, Ikate Street, Command bus-stop, Ibadan",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "sale",
    propertyType: "apartments",
    description: "I love apartments",
    cityArea:'bodija',
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-07-06T22:57:19.024+00:00",

    viewerCount: [
 
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "200",
    title: "3 Plot of Land",
    didNo: "50eo21",
    price: 5000000,
    active:false,

    priceTicker: "",
    propertyFeatures: [
      {
        area: 200,
        room:0
      },
    ],
    description: "The site of an arable land for farming",
    propertyAmenities: [],
    location: "ibadan",
    address: "No 12, Ikate Street, Command bus-stop, Ibadan",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "rent",
    propertyType: "land",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-05-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "3",
    title: "3 Bedroom flat",
    price: 12000000,
    didNo: "ioe324",
    priceTicker: "year",
    active:true,

    propertyFeatures: [
      {
        room: 3,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: false,
        ensuite: true,
        swimmingPool: false,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "lagos",
    address: "No 12, Ikate Street, Command bus-stop, Lagos",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "sale",
    propertyType: "apartments",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-08-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "4",
    title: "3 Bedroom flat",
    price: 950000,
    didNo: "ioe324",
    active:true,

    priceTicker: "year",
    propertyFeatures: [
      {
        room: 1,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: false,
        ensuite: true,
        swimmingPool: false,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "lagos",
    address: "No 12, Ikate Street, Command bus-stop, Lagos",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "rent",
    propertyType: "apartments",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-11-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
   
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "8",
    title: "2 Bedroom flat",
    didNo: "e0eo21",
    price: 7000000,
    active:false,

    priceTicker: "month",
    propertyFeatures: [
      {
        room: 4,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: true,
        ensuite: true,
        swimmingPool: true,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "ibadan",
    address: "No 12, Ikate Street, Command bus-stop, Ibadan",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "sale",
    propertyType: "land",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-01-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "2",
    title: "3 Plot of Land",
    didNo: "50eo21",
    active:true,

    price: 8500000,
    priceTicker: "",
    propertyFeatures: [
      {
        area: 200,
        room:0

      },
    ],
    description: "The site of an arable land for farming",
    propertyAmenities: [],
    location: "ibadan",
    address: "No 12, Ikate Street, Command bus-stop, Ibadan",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "rent",
    propertyType: "land",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-08-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "3",
    title: "3 Bedroom flat",
    active:true,

    price: 3500000,
    didNo: "ioe324",
    priceTicker: "year",
    propertyFeatures: [
      {
        room: 2,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: false,
        ensuite: true,
        swimmingPool: false,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "lagos",
    address: "No 12, Ikate Street, Command bus-stop, Lagos",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "sale",
    propertyType: "apartments",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-03-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "4",
    title: "3 Bedroom flat",
    price: 1700000,
    active:false,

    didNo: "ioe324",
    priceTicker: "year",
    propertyFeatures: [
      {
        room: 1,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: false,
        ensuite: true,
        swimmingPool: false,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "lagos",
    address: "No 12, Ikate Street, Command bus-stop, Lagos",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "rent",
    propertyType: "apartments",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-02-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "1",
    title: "2 Bedroom flat",
    didNo: "e0eo21",
    active:true,

    price: 1300000,
    priceTicker: "month",
    propertyFeatures: [
      {
        room: 5,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: true,
        ensuite: true,
        swimmingPool: true,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "ibadan",
    address: "No 12, Ikate Street, Command bus-stop, Ibadan",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "sale",
    propertyType: "land",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-04-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "2",
    title: "3 Plot of Land",
    didNo: "50eo21",
    active:true,

    price: 4600000,
    priceTicker: "",
    propertyFeatures: [
      {
        area: 200,
        room:0

      },
    ],
    description: "The site of an arable land for farming",
    propertyAmenities: [],
    location: "ibadan",
    address: "No 12, Ikate Street, Command bus-stop, Ibadan",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "rent",
    propertyType: "land",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-04-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "3",
    title: "3 Bedroom flat",
    price: 9000000,
    active:true,

    didNo: "ioe324",
    priceTicker: "year",
    propertyFeatures: [
      {
        room: 3,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: false,
        ensuite: true,
        swimmingPool: false,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "lagos",
    address: "No 12, Ikate Street, Command bus-stop, Lagos",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "sale",
    propertyType: "apartments",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-07-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
  {
    id: "4",
    title: "3 Bedroom flat",
    price: 34000000,
    didNo: "ioe324",
    priceTicker: "year",
    active:false,

    propertyFeatures: [
      {
        room: 4,
        bathroom: 2,
        kitchen: 2,
        area: 200,
        master: false,
        ensuite: true,
        swimmingPool: false,
      },
    ],
    propertyAmenities: [
      "Water Heater",
      "Air Condition",
      "Gym",
      "Microwave",
      "Laundry",
      "Parking",
      "Power Plant",
      "Water Front",
    ],
    location: "lagos",
    address: "No 12, Ikate Street, Command bus-stop, Lagos",
    country: "Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    listing: "rent",
    propertyType: "apartments",
    currency: "NGN",
    realtor: [{ name: "Ade", phone: "0980890090", email: "dummy@gmail.com" }],
    verifiedOwner: [
      { id: "1", name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    createdAt: "2022-05-06T22:57:19.024+00:00",

    viewerCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
   
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    ownerHistory: [
      { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
    ],
    dealHistory: [
      {
        dateOfSale: "2022-09-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-11-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
      {
        dateOfSale: "2022-12-13T08:57:19.024+00:00",
        to: { name: "Ade", phone: "0980890090", email: "dummy@gmail.com" },
        amount: "5000000",
        currency: "US$",
      },
    ],
  },
];

export const propertyTypes = [
  {
    id: "1",
    propertyType: "apartments",
    propertyCount: 20,
  },
  {
    id: "2",
    propertyType: "land",
    propertyCount: 20,
  },
  {
    id: "3",
    propertyType: "office",
    propertyCount: 20,
  },
  {
    id: "4",
    propertyType: "shop",
    propertyCount: 20,
  },
  {
    id: "5",
    propertyType: "Event Center",
    propertyCount: 20,
  },
];
export const neighborhoodData = [
  {
    id: "1",
    location: "Ago Palace",
    propertyCount: 20,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    proximity: {
      days: 0,
      hours: 1,
      minutes: 20,
    },
  },
  {
    id: "2",
    location: "Ikeja",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    propertyCount: 20,
    proximity: {
      days: 0,
      hours: 0,
      minutes: 30,
    },
  },
  {
    id: "3",
    location: "Yaba",
    propertyCount: 30,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    proximity: {
      days: 0,
      hours: 0,
      minutes: 23,
    },
  },
  {
    id: "4",
    location: "Oshodi",
    propertyCount: 13,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    proximity: {
      days: 0,
      hours: 0,
      minutes: 45,
    },
  },
  {
    id: "5",
    location: "Isolo",
    propertyCount: 25,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    proximity: {
      days: 0,
      hours: 0,
      minutes: 55,
    },
  },
];
export const destinationData = [
  {
    id: "1",
    location: "lagos",
    country: "nigeria",
    propertyCount: 200,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
  },
  {
    id: "2",
    location: "Abuja, Nigeria",
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
    propertyCount: 620,
  },
  {
    id: "3",
    location: "Portharcourt, Nigeria",
    propertyCount: 310,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
  },
  {
    id: "4",
    location: "Kano, Nigeria",
    propertyCount: 134,
    files: [
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665326004/fno9kboqdoh4tphgibx8.jpg",
        cloudinary_id: "fno9kboqdoh4tphgibx8",
      },
      {
        secure_url:
          "https://res.cloudinary.com/dkontlptv/image/upload/v1665349155/sr0rgl0dqz5ofqkhgxt4.jpg",
        cloudinary_id: "sr0rgl0dqz5ofqkhgxt4",
      },
    ],
  },
];

export const agentData = [
{
  name:'add23 shsn',
  id: "100",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  area:'ago_palace',
  
  viewerCount: [
 
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],
  favoriteCount: [
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },

  ],
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add23 shsn',

  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  area:'ikeja',

  
  viewerCount: [
 
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],
  favoriteCount: [
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add2 shsn',

  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  area:'ago_palace',
  
  viewerCount: [
 
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],
  favoriteCount: [
  
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add1 shsn',

  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  area:'lagos_island',

  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },
  
  viewerCount: [
 
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],
  favoriteCount: [
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  ],

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add23 shsn',

  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  area:'ago_palace',

  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add23 shsn',

  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  area:'yaba',

  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add23 shsn',
  id: "1",
  area:'ketu',

  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},

{
  name:'kenny g',
  id: "1",
  area:'maitama',

  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  location:"abuja",
  company:'rev estate',
  bio: "i love Mansions",
  phone:'23400067786758',

  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  company:'rev estate',
  location:"ibadan",
  area:'challenge',

  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: "",

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  phone:'23400067786758',
  location:"abuja",
  area:'fagge',

  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  company:'rev estate',
  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503042/agent2_jzpqou.jpg",
    cloudinary_id: "agent2_jzpqou",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  location:"abuja",
  area:'govt_road',

  phone:'23400067786758',

  company:'rev estate',
  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  phone:'23400067786758',
  location:"lagos",

  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  company:'rev estate',
  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503042/agent2_jzpqou.jpg",
    cloudinary_id: "agent2_jzpqou",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  location:"lagos",

  company:'rev estate',
  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  role:'agent',
  location:"ibadan",

  company:'rev estate',
  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503042/agent2_jzpqou.jpg",
    cloudinary_id: "agent2_jzpqou",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'kenny g',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",

  role:'agent',
  company:'rev estate',
  bio: "i love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
{
  name:'add',
  id: "1",
  email: "kennyg@gmail.com",
  username: "kenny",
  location:"lagos",
  role:'agent',
  company:'',
  bio: "i love Mansions",
  phone:'23400067786758',
  socialHandle: {
    twitter: "https://twitter.com/kenny",
    facebook: "https://facebook.com/kenny",
    instagram: "https://instagram.com/kenny",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],
  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },
  profileBanner: {
    secure_url:
      "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
    cloudinary_id: "agent_zxcidu",
  },

  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
},
];
export const user = {
  id: "1",
  email: "princzny@gmail.com",
  username: "Ade",
  bio: "I love Mansions",
  socialHandle: {
    twitter: "https://twitter.com/ade",
    facebook: "https://facebook.com/ade",
    instagram: "https://instagram.com/ade",
  },

  ratings: [
    { userId: "1", rating: 5 },
    { userId: "2", rating: 3 },
  ],
  notifications: [
    {
      itemSold: true,
      bidActivity: false,
      auctionExpiration: true,
      outbid: false,
      successfulPurchase: false,
      newsletter: false,
      minimumBid: true,
    },
  ],
  verified: true,
  documents: [{}],
  propVerifyDocs: [
    {
      propertyId: "1",
      docs: Flat,
      createdAt: "2022-08-06T22:57:19.024+00:00",
      status: "pending",
    },
  ],
  properties: [],

  address: "No 12, Ikate Street, Command bus-stop",
  profilePhoto: Flat,
  profileBanner: Flat,
  preferredCurrency: ["NGN"],
  createdAt: "2022-02-06T22:57:19.024+00:00",
  earnings: [
    {
      propertyId: "1",
      soldOn: "2022-06-06T22:57:19.024+00:00",
      paidOut: "2022-06-12T22:57:19.024+00:00",
      percentage: 10,
      activity: "sold",
      amount: 5000000,
      currency: "US$",
      payoutType: "commission-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 5,
      amount: 5000000,
      currency: "US$",
      payoutType: "royalty-based",
    },
    {
      propertyId: "2",
      soldOn: "2022-07-16T22:57:19.024+00:00",
      paidOut: "2022-08-01T22:57:19.024+00:00",
      activity: "sold",
      percentage: 1,
      amount: 1000000,
      currency: "NGN",
      payoutType: "referral-based",
    },
  ],
};

export const agent = 
  {
    name:'add23 shsn',
    id: "100",
    email: "kennyg@gmail.com",
    username: "kenny",
    location:"lagos",
    area:'ago_palace',
    password:'123456',
    viewerCount: [
   
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
    ],
    favoriteCount: [
      { id: "1", viewedDate: "2022-06-08T22:57:19.024+00:00" },
  
    ],
    role:'agent',
    company:'',
    bio: "i love Mansions",
    phone:'23400067786758',
    socialHandle: {
      twitter: "https://twitter.com/kenny",
      facebook: "https://facebook.com/kenny",
      instagram: "https://instagram.com/kenny",
    },
  
    ratings: [
      { userId: "1", rating: 5 },
      { userId: "2", rating: 3 },
    ],
    notifications: [
      {
        itemSold: true,
        bidActivity: false,
        auctionExpiration: true,
        outbid: false,
        successfulPurchase: false,
        newsletter: false,
        minimumBid: true,
      },
    ],
    verified: true,
    documents: [{}],
    propVerifyDocs: [
      {
        propertyId: "1",
        docs: Flat,
        createdAt: "2022-08-06T22:57:19.024+00:00",
        status: "pending",
      },
    ],
    properties: [],
    address: "No 12, Ikate Street, Command bus-stop",
    profilePhoto: {
      secure_url:
        "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
      cloudinary_id: "agent_zxcidu",
    },
    profileBanner: {
      secure_url:
        "https://res.cloudinary.com/dkontlptv/image/upload/v1677503041/agent_zxcidu.jpg",
      cloudinary_id: "agent_zxcidu",
    },
  
    preferredCurrency: ["NGN"],
    createdAt: "2022-02-06T22:57:19.024+00:00",
    earnings: [
      {
        propertyId: "1",
        soldOn: "2022-06-06T22:57:19.024+00:00",
        paidOut: "2022-06-12T22:57:19.024+00:00",
        percentage: 10,
        activity: "sold",
        amount: 5000000,
        currency: "US$",
        payoutType: "commission-based",
      },
      {
        propertyId: "2",
        soldOn: "2022-07-16T22:57:19.024+00:00",
        paidOut: "2022-08-01T22:57:19.024+00:00",
        activity: "sold",
        percentage: 5,
        amount: 5000000,
        currency: "US$",
        payoutType: "royalty-based",
      },
      {
        propertyId: "2",
        soldOn: "2022-07-16T22:57:19.024+00:00",
        paidOut: "2022-08-01T22:57:19.024+00:00",
        activity: "sold",
        percentage: 1,
        amount: 1000000,
        currency: "NGN",
        payoutType: "referral-based",
      },
    ],
  }
