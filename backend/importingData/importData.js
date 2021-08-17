const data = require('./helper.js');
const Food = require('../models/food.js');

async function importData()
{
    try{
        await Food.deleteMany({});
        await Food.insertMany(data.data);
        console.log('data imported');

    }catch(error){
        console.log('error');
        //process.exit(1); //  Uncaught Fatal Exception for node exit code 
    }
}

module.exports = importData;
