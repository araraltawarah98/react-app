import coffeeBeans from "../assets/images/coffee-beans.png";
import menuButton from "../assets/images/menu-button-of-three-horizontal-lines.png";
import profile from "../assets/images/profile-image.png";
import shoppingCard from "../assets/images/shopping-card.png";

const images = [
  {
    alt: "Coffee Beans",
    id: 1,
    src: coffeeBeans,
  },
  {
    alt: "Menu Icon",
    id: 2,
    src: menuButton,
  },
  {
    alt: "Profile Image",
    id: 3,
    src: profile,
  },
  {
    alt: "Shopping Card",
    id: 4,
    src: shoppingCard,
  },
];

const logo = images[0];
const menuIcon = images[1];
const profileImage = images[2];
const shoopingCardImage = images[3];

const menuItems = [
  { name: "home", label: "Home", id: 1 },
  { name: "about-us", label: "About Us", id: 2 },
  { name: "our-land", label: "Our Lands", id: 3 },
  { name: "our-suppliers", label: "Our Suppliers", id: 4 },
  { name: "products", label: "Products", id: 5 },
  { name: "contact-us", label: "Contact Us", id: 6 },
];

export { logo, menuIcon, menuItems, profileImage, shoopingCardImage };
