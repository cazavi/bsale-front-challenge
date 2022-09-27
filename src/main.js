let globalData = [];

const getCategories = axios
  .get("https://bsaleapichallenge.herokuapp.com")
  .then((response) => {
    const cData = response.data.result;
    
  })
  .catch((error) => {
    console.log(error);
  });

const getProducts = axios
  .get("https://bsaleapichallenge.herokuapp.com/product")
  .then((response) => {
    const pData = response.data.result;
    order(pData);
    filterSearch(pData);
  })
  .catch((error) => {
    console.log(error);
  });



function order(data) {
  data.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  return data;
}

// const productsByCategory = (data) =>{
//   const filteredProduct = data.filter(data.category === 1)
//   return filteredProduct
// }

const search = document.querySelector("#searchInput");

const result = document.querySelector("#result");

const filter = document.getElementById("#filter");
// const getCategory = (products) =>{

// })
  
// getCategory();
// }
const filterSearch = (data, index=0) => {
  console.log('DATA', data)
  if (index != 0) {
    data = data.filter(data =>data.category === 1)
  }
  // console.log(filteredProduct)

  for (let product of data) {
    const card = document.createElement("div");
    card.classList.add("cardDiv");

    const productName = document.createElement("h5");
    productName.classList.add("productName");
    productName.textContent = product.name;
    card.appendChild(productName);

    const image = document.createElement("img");
    image.classList.add("productImg");
    image.src = product.url_image;
    card.appendChild(image);

    const discountPrice = document.createElement("p");
    discountPrice.classList.add("discountPrice");
    discountPrice.textContent = `$ ${product.price - product.discount}`;
    card.appendChild(discountPrice);

    const discount = document.createElement("p");
    discount.classList.add("discount");
    discount.textContent = `-$ ${product.discount}`;
    card.appendChild(discount);

    const price = document.createElement("p");
    price.classList.add("prices");
    price.textContent = `$ ${product.price}`;
    card.appendChild(price);

    const category = document.createElement("p");
    category.classList.add("category");
    category.textContent = product.category;
    card.appendChild(category);

    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = 'Agregar';
    card.appendChild(button);
    
  result.appendChild(card);
  }
  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#searchInput")) {
      if (e.key === "Escape") e.target.value = "";

      document.querySelectorAll(".cardDiv").forEach((product) => {
        product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? product.classList.remove("filtro")
          : product.classList.add("filtro");
      });
    }
  });
  document.addEventListener("change", (e, data) => {
    console.log('ACA',data)
    filterSearch(data, e.target.selectedIndex)
    // console.log('HOLA',e.target.selectedIndex)
    // productsByCategory(data);
    // console.log(productsByCategory(globalData))
    if (e.target.matches("#filter")) {
    console.log('TARGET',e.target);
      document.querySelectorAll(".cardDiv").forEach((product) => {
        const categorySelect = document.getElementById('filter')
        // console.log('CATEGORYSELECT',categorySelect)
        const type = categorySelect.options[categorySelect.selectedIndex].value;
        // console.log('TYPE',type)
        // console.log('PRODUCT CATEGORY', product)
        // console.log('PRODUCT CATEGORY', product.textContent)
        product.category === type
          ? product.classList.remove("category")
          : product.classList.add("category");
      });
    }
  });
filterSearch();};

// const productsByCategory = (data) =>{
//   
//   categorySelect.addEventListener("change", function () {
//   
//   const resultCategory = products.filter(products => products.category === type);
//   for (let product of data) {
//     const card = document.createElement("div");
//     card.classList.add("cardDiv");

//     const productName = document.createElement("h5");
//     productName.classList.add("productName");
//     productName.textContent = product.name;
//     card.appendChild(productName);

//     const image = document.createElement("img");
//     image.classList.add("productImg");
//     image.src = product.url_image;
//     card.appendChild(image);

//     const discountPrice = document.createElement("p");
//     discountPrice.classList.add("discountPrice");
//     discountPrice.textContent = `$ ${product.price - product.discount}`;
//     card.appendChild(discountPrice);

//     const discount = document.createElement("p");
//     discount.classList.add("discount");
//     discount.textContent = `-$ ${product.discount}`;
//     card.appendChild(discount);

//     const price = document.createElement("p");
//     price.classList.add("prices");
//     price.textContent = `$ ${product.price}`;
//     card.appendChild(price);
    
//   result.appendChild(card);
//   }
//   document.addEventListener("keyup", (e) => {
//     if (e.target.matches("#searchInput")) {
//       if (e.key === "Escape") e.target.value = "";

//       document.querySelectorAll(".cardDiv").forEach((product) => {
//         product.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//           ? product.classList.remove("filtro")
//           : product.classList.add("filtro");
//       });
//     }
//   });
//   })
//   productsByCategory();
// }
