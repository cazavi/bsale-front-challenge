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

const search = document.querySelector("#searchInput");

const result = document.querySelector("#result");

const filter = document.getElementById("#filter");

const filterSearch = (cdata) => {
  for (let product of cdata) {
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
  filterSearch();
};
