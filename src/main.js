const getCategories = () => {
  axios
  .get("https://bsaleapichallenge.herokuapp.com")
  .then((response) => {
    const cData = response.data.result;
    
  })
  .catch((error) => {
    console.log(error);
  });
} 

const getProducts = async (categoryIndex) => {
  console.log("🚀 ~ file: main.js ~ line 15 ~ getProducts ~ categoryIndex", categoryIndex)
  try {
    let response = await axios.get("https://bsaleapichallenge.herokuapp.com/product")
    let pData = response.data.result
    if (categoryIndex != 0) {
      pData = pData.filter(el => el.category === categoryIndex)
      console.log("🚀 ~ file: main.js ~ line 20 ~ .then ~ pData2", pData)
    }
    order(pData);
    return pData;
  } catch (e) {
    console.log(error);
    return [];
  }
}

function order(data) {
  data.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  return data;
}

const renderItems = (itemsToRender) => {
  console.log("🚀 ~ file: main.js ~ line 46 ~ renderItems ~ data", itemsToRender)
  for (let product of itemsToRender) {
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
};

const productsData = await getProducts(0);
renderItems(productsData);

document.addEventListener("change", async (e) => {
  const itemsByCategory = await getProducts(e.target.selectedIndex);
  console.log("🚀 ~ file: main.js ~ line 105 ~ document.addEventListener ~ itemsByCategory", itemsByCategory)

  document.querySelectorAll(".cardDiv").forEach((product) => {
    const categorySelect = document.getElementById('filter')
    const type = categorySelect.options[categorySelect.selectedIndex].value;
    product.category === type ? product.classList.remove("category") : product.classList.add("category");
  });

  renderItems(itemsByCategory)
});