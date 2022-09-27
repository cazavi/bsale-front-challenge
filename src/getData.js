import order from './orderData.js';

const getCategories = () => {
  axios
    .get("https://bsaleapichallenge.herokuapp.com")
    .then((response) => {
      const cData = response.data.result;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getProducts = async (categoryIndex) => {
  try {
    let response = await axios.get(
      "https://bsaleapichallenge.herokuapp.com/product"
    );
    let pData = response.data.result;
    if (categoryIndex != 0) {
      pData = pData.filter((el) => el.category === categoryIndex);
    }
    order(pData);
    return pData;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export {getCategories, getProducts}