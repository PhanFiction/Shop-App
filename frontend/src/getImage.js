const BASE_URL = process.env.REACT_APP_BASE_URL;

const getImage = (imgName) => {
    if(imgName === undefined) return null;

    const removeBackSlash = imgName.replace(/\\/g, "/");

    return `${BASE_URL}/${removeBackSlash}`;
}

export default getImage;