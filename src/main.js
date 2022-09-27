import {getProducts} from './getData.js';
import renderItems from './renderItems.js';

const productsData = await getProducts(0);
renderItems(productsData);

document.addEventListener("change", async (e) => {
  const itemsByCategory = await getProducts(e.target.selectedIndex);
  console.log(
    itemsByCategory
  );

  document.querySelectorAll(".cardDiv").forEach((product) => {
    const categorySelect = document.getElementById("filter");
    const type = categorySelect.options[categorySelect.selectedIndex].value;
    product.category === type
      ? product.classList.remove("category")
      : product.classList.add("category");
  });

  renderItems(itemsByCategory);
});
