const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app.js');
const api = supertest(app);
const Food = require('../models/food.js');

const products = {
    name: "chocolate",
    price: 2.50,
    category: "dessert",
    path: null,
}

const productsInDb = async () => {
    const products = await Food.find({}); // find all documents in blog database
    return products.map(item => item.toJSON());
}


beforeEach(async ()=>{
    await Food.deleteMany({});
    await Food.insertMany(products);
})

describe('test product post' , ()=>{
    test('post a product', async () => {

        // should be an object of data
        const product = {
            name: "ice cream pie",
            price: 6.50,
            category: "dessert",
        }

        await api
            .post('/menu/products')
            .send(product)
            .then(data => console.log(data.body));
/*             .expect(200)
            .expect('Content-Type', /application\/json/)  */

        //const atStart = await productsInDb();
        //expect(atStart).toHaveLength(1);
    })

    test('missing product name', async ()=>{

        const product = {
            price: 6.50,
            category: "lunch"
        }

        await api
            .post('/menu/products')
            .send(product)
            .expect(400)
            .expect('Content-Type', /application\/json/)
    })
})

afterAll(()=> {
    mongoose.connection.close();
})