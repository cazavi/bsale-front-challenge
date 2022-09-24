"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios.default.get('http://localhost:8000/product').then(response => {
  console.log(response);
  console.log('llegó el produsto');
}).catch(error => {
  console.log(error);
});