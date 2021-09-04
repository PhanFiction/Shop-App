const axios = require('axios');
const BASE_URL = process.env.REACT_APP_BASE_URL;

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getCartItems = async ()=> {
    const cartItems = await axios.get(`BASE_URL/cart`);
    return cartItems;
}

const createItem = async (newObject) => {
    const config = {headers: { Authorization: token }};
    
    const response = await axios.post(BASE_URL, newObject, config)
    return response.data
}

const updateItem = async(newObject, id) => {
    const response = await axios.put(`${BASE_URL}/${id}`, newObject);
    return response.data;
}

const purchaseItems = async (itemObj) => {
    const config = {headers: { Authorization: token }};

    const response = await axios.post(`${BASE_URL}/checkout`, itemObj, config);

    return response.data;
}

module.exports = {
    setToken, getCartItems, createItem, updateItem, purchaseItems,
}