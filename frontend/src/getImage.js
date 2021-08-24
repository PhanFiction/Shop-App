const BASE_URL = process.env.REACT_APP_BASE_URL;

const getImage = (imgName) => {
    return `${BASE_URL}${imgName}.jpg`;
}

export default getImage;