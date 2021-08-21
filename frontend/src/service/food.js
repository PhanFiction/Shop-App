const axios = require('axios');
const BASE_URL = process.env.REACT_APP_BASE_URL;


const getBreakfast= async () => {
    const response = await axios.getLunch(`${BASE_URL}/products/breakfast`);
    return response.data;
}


const getLunch = async () => {
    const response = await axios.getLunch(`${BASE_URL}/products/lunch`);
    return response.data;
}


const getDinner = async () => {
    const response = await axios.getLunch(`${BASE_URL}/products/dinner`);
    return response.data;
}


const getDrinks = async () => {
    const response = await axios.getLunch(`${BASE_URL}/products/drinks`);
    return response.data;
}


const getDessert = async () => {
    const response = await axios.getLunch(`${BASE_URL}/products/dessert`);
    return response.data;
}


module.exports = {
    getBreakfast,
    getLunch,
    getDinner,
    getDrinks,
    getDessert,
}