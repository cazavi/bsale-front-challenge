function order(data) {
  data.sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  return data;
}
 export default order;
