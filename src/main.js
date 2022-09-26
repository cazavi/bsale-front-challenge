const getCategories =
axios
  .get('https://bsaleapichallenge.herokuapp.com')
  .then((response)=> {
    const cData = response.data.result;
    
  })
  .catch((error)=> {
    console.log(error)
  })

  const getProducts =
  axios
  .get('https://bsaleapichallenge.herokuapp.com/product')
  .then((response)=> {
    const pData = response.data.result;
    filterSearch(pData);  })
  .catch((error)=> {
    console.log(error)
  })

// const products = [
//   {name:'Plátanos', price:500},
//   {name:'Frutilla', price:600},
//   {name:'Sandia', price:700},
//   {name:'Melon', price:800},
//   {name:'Pera', price:900},
//   {name:'Manzana', price:1000}
// ]

const search = document.querySelector('#searchInput');
// const btnSearch = document.querySelector('#searchButton');
const result = document.querySelector('#result');

const filter= document.getElementById('#filter')



const filterSearch = (cdata) => {
  result.innerHTML = '';
  const text = search.value.toLowerCase();
  for (let product of cdata) {
    let name = product.name.toLowerCase();
    if (name.indexOf(text) !== -1) {
    
      // document.querySelector('productImg').setAttribute('src',product.url_image)
      
      result.innerHTML += `


      <h5 class="productName">${product.name}</h5>
      <div class="prices">
      <span class="productPrice ">$${product.price}</span>
      <span class="productPrice ">$${product.price-product.discount}</span>
      <span class="productPrice ">$${product.discount}</span>
      <a class="add">Agregar</a>
      </div>


      `
    }
    const image = document.createElement('img')
    image.classList.add('productImg')
    image.src  = product.url_image
    document.querySelector('#result').appendChild(image)
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

