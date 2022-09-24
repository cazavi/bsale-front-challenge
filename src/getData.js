import axios from 'axios';

axios
  .get('http://localhost:8000/product')
  .then((response)=> {
    console.log(response)
    console.log('llegó el produsto')
  })
  .catch((error)=> {
    console.log(error)
  })

