const STATIC_IMG_PATH = process.env.REACT_APP_FOOD_IMG_URL;

const getImage = (imgName) => {
    return `${STATIC_IMG_PATH}/${imgName}.jpg`;
}

export default getImage;