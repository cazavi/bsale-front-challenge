
const renderItems = (itemsToRender) => {
  console.log(
    itemsToRender
  );
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
    button.textContent = "Agregar";
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

export default renderItems;