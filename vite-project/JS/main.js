import "../css/style.css";
import { products } from "./products.js";

const DOMSelectors = {
  pattyButton: document.getElementById("patty"),
  toppingButton: document.getElementById("topping"),
  cheeseButton: document.getElementById("cheese"),
  sauceButton: document.getElementById("sauce"),
  vegetarianButton: document.getElementById("vegetarian"),
  saleButton: document.getElementById("sale"),
  resetButton: document.getElementById("reset"),
  container: document.getElementById("container"),
};

DOMSelectors.pattyButton.addEventListener("click", function() {
  const pattyProducts = products.filter(product => product.type === "patty");
  createCard(pattyProducts);
});

DOMSelectors.toppingButton.addEventListener("click", function() {
  const toppingProducts = products.filter(product => product.type === "topping");
  createCard(toppingProducts);
});

DOMSelectors.cheeseButton.addEventListener("click", function() {
  const cheeseProducts = products.filter(product => product.type === "cheese");
  createCard(cheeseProducts);
});

DOMSelectors.sauceButton.addEventListener("click", function() {
  const sauceProducts = products.filter(product => product.type === "sauce");
  createCard(sauceProducts);
});

DOMSelectors.vegetarianButton.addEventListener("click", function() {
  const vegetarianProducts = products.filter(product => product.vegetarian);
  createCard(vegetarianProducts);
});

DOMSelectors.saleButton.addEventListener("click", function() {
  const saleProducts = products.map((product) => {
    return {...product, price: product.price * 0.75}
  });
  createCard(saleProducts);
});

DOMSelectors.resetButton.addEventListener("click", function() {
  console.log("click")
  createCard(products);
});

function createCard(products) {
  DOMSelectors.container.innerHTML = '';
  products.forEach(product => {
  DOMSelectors.container.insertAdjacentHTML('beforeend',
    `<div class="card">
      <p>${product.name}</p>
      <p>$${product.price}</p>
    </div>`
  );
});
};