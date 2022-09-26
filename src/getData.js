
const getCategories= 
  axios
    .get('https://bsaleapichallenge.herokuapp.com')
    .then((response)=> {
      console.log(response.data)
      console.log('llegaron las categorías')
    })
    .catch((error)=> {
      console.log(error)
    })

const getProducts=
  axios
  .get('https://bsaleapichallenge.herokuapp.com/product')
  .then((response)=> {
    console.log(response.data)
    console.log('llegaron los produstos')
  })
  .catch((error)=> {
    console.log(error)
  })

export {getCategories, getProducts}