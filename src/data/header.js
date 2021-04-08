import coffeeBeans from "../assets/images/coffee-beans.png";
import menuIcon from "../assets/images/menu-button-of-three-horizontal-lines.png";
import profileImage from "../assets/images/profile-image.png";
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
    src: menuIcon,
  },
  {
    alt: "Profile Image",
    id: 3,
    src: profileImage,
  },
  {
    alt: "Shopping Card",
    id: 4,
    src: shoppingCard,
  },
];

const menuItems = [
  { name: "home", label: "Home", id: 1 },
  { name: "about-us", label: "About Us", id: 2 },
  { name: "our-land", label: "Our Lands", id: 3 },
  { name: "our-suppliers", label: "Our Suppliers", id: 4 },
  { name: "products", label: "Products", id: 5 },
  { name: "contact-us", label: "Contact Us", id: 6 },
];

export { images, menuItems };
