const axios = require('axios');
const BASE_URL = process.env.REACT_APP_BASE_URL;

/**
 * 
 * @param {category} food category 
 * @returns a list of all food category 
 */
const getCategory = async (category) => {
    const response = await axios.get(`${BASE_URL}/menu/${category}`);
    return response.data;
}

/**
 * @param {foodType} foodType 
 * @param {id} id
 * @returns returns the specific item of a food 
 */
const getFoodID = async (foodType, id) => {
    const response = await axios.get(`${BASE_URL}/menu/${foodType}/:${id}`);
    return response.data;
}

module.exports = {
    getCategory,
    getFoodID,
}