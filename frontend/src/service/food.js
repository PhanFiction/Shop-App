const axios = require('axios');
const BASE_URL = process.env.REACT_APP_BASE_URL;


const getImages = async (img) => {
    const response = await axios.get(`${BASE_URL}/images/${img}.jpg`);
    return response.data;
}

module.exports = {
    getImages,
}