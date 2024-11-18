import "../CSS/style.css";
import { products } from "./products.js";

const DOMSelectors = {
  body: document.body,
  pattyButton: document.getElementById("patty"),
  toppingButton: document.getElementById("topping"),
  cheeseButton: document.getElementById("cheese"),
  sauceButton: document.getElementById("sauce"),
  vegetarianButton: document.getElementById("vegetarian"),
  saleButton: document.getElementById("sale"),
  resetButton: document.getElementById("reset"),
  container: document.getElementById("container"),
  themeButton: document.getElementById("theme-button")
};

DOMSelectors.pattyButton.addEventListener("click", function () {
  const pattyProducts = products.filter((product) => product.type === "patty");
  createCard(pattyProducts);
});

DOMSelectors.toppingButton.addEventListener("click", function () {
  const toppingProducts = products.filter(
    (product) => product.type === "topping"
  );
  createCard(toppingProducts);
});

DOMSelectors.cheeseButton.addEventListener("click", function () {
  const cheeseProducts = products.filter(
    (product) => product.type === "cheese"
  );
  createCard(cheeseProducts);
});

DOMSelectors.sauceButton.addEventListener("click", function () {
  const sauceProducts = products.filter((product) => product.type === "sauce");
  createCard(sauceProducts);
});

DOMSelectors.vegetarianButton.addEventListener("click", function () {
  const vegetarianProducts = products.filter((product) => product.vegetarian);
  createCard(vegetarianProducts);
});

DOMSelectors.saleButton.addEventListener("click", function () {
  const saleProducts = products.map((product) => {
    return { ...product, price: parseFloat((product.price * .75).toFixed(2))};
  });
  createCard(saleProducts);
});

DOMSelectors.resetButton.addEventListener("click", function () {
  createCard(products);
});

DOMSelectors.themeButton.addEventListener("click", function () {
  if (DOMSelectors.body.classList.contains("blue")) {
    DOMSelectors.body.classList.add("black");
    DOMSelectors.body.classList.remove("blue");
  } else {
    DOMSelectors.body.classList.add("blue");
    DOMSelectors.body.classList.remove("black");
  }
});

function createCard(products) {
  DOMSelectors.container.innerHTML = "";
  products.forEach((product) => {
    const roundedPrice = (product.price).toFixed(2);
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <p class="product-name">${product.name}</p>
      <p class="product-price">${"$"+roundedPrice}</p>
    </div>`
    );
  });
}

createCard(products);
