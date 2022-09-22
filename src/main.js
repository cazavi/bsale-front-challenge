
const products = [
  {name:'Plátanos', price:500},
  {name:'Frutilla', price:600},
  {name:'Sandia', price:700},
  {name:'Melon', price:800},
  {name:'Pera', price:900},
  {name:'Manzana', price:1000}
]
const search = document.querySelector('#searchInput');
// const btnSearch = document.querySelector('#searchButton');
const result = document.querySelector('#result');

const filterSearch = () => {
  result.innerHTML = '';
  const text = search.value.toLowerCase();
  for (let product of products) {
    let name = product.name.toLowerCase();
    if (name.indexOf(text) !== -1) {
      result.innerHTML += `
      <div class="card">
      <a href="#">
        </a>
        <div class="px-5 pb-5">
            <a >
                <h5 class="productName">${product.name}</h5>
            </a>
            <div >
                <span class="productPrice ">$${product.price}</span>
                <a class="add">Agregar</a>
            </div>
        </div>
        </div>
      `
    }
  }
  if (result.innerHTML === '') {
    result.innerHTML += `
    <li>Producto no encontrado...</li>
    `
  }
}

// btnSearch.addEventListener('click', filterSearch);
search.addEventListener('keyup', filterSearch);
filterSearch();

      // <li>${product.name}-Precio:${product.price}</li>
      // <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image">
