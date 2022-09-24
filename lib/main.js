"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

// import { petition } from "./getData";
// console.log(petition);
const products = [{
  name: 'Plátanos',
  price: 500
}, {
  name: 'Frutilla',
  price: 600
}, {
  name: 'Sandia',
  price: 700
}, {
  name: 'Melon',
  price: 800
}, {
  name: 'Pera',
  price: 900
}, {
  name: 'Manzana',
  price: 1000
}];
const search = document.querySelector('#searchInput'); // const btnSearch = document.querySelector('#searchButton');

const result = document.querySelector('#result');
const filter = document.getElementById('#filter');

const filterSearch = () => {
  result.innerHTML = '';
  const text = search.value.toLowerCase();

  for (let product of products) {
    let name = product.name.toLowerCase();

    if (name.indexOf(text) !== -1) {
      result.innerHTML += "\n      <div class=\"card\">\n      <a href=\"#\">\n        </a>\n        <div class=\"px-5 pb-5\">\n            <a >\n                <h5 class=\"productName\">".concat(product.name, "</h5>\n            </a>\n            <div class=\"prices\">\n                <span class=\"productPrice \">$").concat(product.price, "</span>\n                <span class=\"productPrice \">$").concat(product.price - product.discount, "</span>\n                <span class=\"productPrice \">$").concat(product.discount, "</span>\n\n                <a class=\"add\">Agregar</a>\n            </div>\n        </div>\n        </div>\n      ");
    }
  }

  if (result.innerHTML === '') {
    result.innerHTML += "\n    <li>Producto no encontrado...</li>\n    ";
  }
}; // btnSearch.addEventListener('click', filterSearch);


search.addEventListener('keyup', filterSearch);
filterSearch(); // <li>${product.name}-Precio:${product.price}</li>
// <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image">