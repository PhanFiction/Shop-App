// authorization token needed to do the following items
const axios = require('axios');
const BASE_URL = process.env.REACT_APP_BASE_URL;

let token = null;

const setToken = (newToken) => {
    token = `Bearer ${newToken}`
}

const updateShopItem = async(newObject, id) => {
    const config = {headers: { Authorization: token }};
    const response = await axios.put(`${BASE_URL}/menu/products/${id}`, newObject, config);
    return response.data;
}

const purchaseItems = async (newObject) => {
    const config = {headers: { Authorization: token }};
    const response = await axios.post(`${BASE_URL}/cart/checkout`, newObject,  config);
    return response.data;
}

const handleItemsInCart = async (newObject) => {
    const config = {headers: { Authorization: token }};
    const response = await axios.post(`${BASE_URL}/cart`, newObject, config);
    return response.data;
}

const getCartItems = async () => {
    const config = {headers: { Authorization: token }};
    const response = await axios.get(`${BASE_URL}/cart`, config);
    return response.data;
}

const updateUser = async (credentials, userId) => {
    const config = {headers: { Authorization: token }};
    const response = await axios.put(`${BASE_URL}/user/${userId}`, credentials, config);
    return response.data;
}
 
export default {
    setToken, handleItemsInCart, updateShopItem, purchaseItems, getCartItems, updateUser
}