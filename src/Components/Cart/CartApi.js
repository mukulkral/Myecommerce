import axios from "axios";

export const fetchCart = () =>{
  return axios.get('https://fakestoreapi.com/products')
}




// import axios from "axios";

// export const fetchItems = () => {
//   return axios.get('https://fakestoreapi.com/products')
// }
// export const addItem = (item) => {
//   return axios.post('https://fakestoreapi.com/products', item)
// }
// export const updateItem = (id, itemUpdate) => {
//   return axios.patch(`https://fakestoreapi.com/products${id}`, itemUpdate)
// }
// export const deleteItem = (id) => {
//   return axios.delete(`https://fakestoreapi.com/products${id}`)
// }