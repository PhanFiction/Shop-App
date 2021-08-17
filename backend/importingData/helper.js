const Food = require('../models/food.js');

const data = [
    {
        name: "Tai Noodle Shrimp",
        price: 10,
        category: "Breakfast",
        imageUrl: "/images/breakfast-1.jpg"
    },
    {
        name: "Grilled Crab with Onion",
        price: 10,
        category: "Breakfast",
        imageUrl: "/images/breakfast-2.jpg"
    },
    {
        name: "Fruit Oatmeal",
        price: 8,
        category: "Breakfast",
        imageUrl: "/images/breakfast-3.jpg"
    },
    {
        name: "Egg Avocado",
        price: 9,
        category: "Breakfast",
        imageUrl: "/images/breakfast-4.jpg"
    },
    {
        name: "Fried Chicken strips",
        price: 10,
        category: "Breakfast",
        imageUrl: "/images/breakfast-5.jpg"
    },
    {
        name: "Avocado Toast Egg Sandwich",
        price: 10,
        category: "Breakfast",
        imageUrl: "/images/breakfast-6.jpg"
    },
    {
        name: "Grilled Salmon",
        price: 12,
        category: "Lunch",
        imageUrl: "/images/lunch-1.jpg"
    },
    {
        name: "Grilled Chicken Wing",
        price: 11,
        category: "Lunch",
        imageUrl: "/images/lunch-2.jpg"
    },
    {
        name: "Fried Chicken",
        price: 10,
        category: "Lunch",
        imageUrl: "/images/lunch-3.jpg"
    },
    {
        name: "Shrimp Kebab",
        price: 10,
        category: "Lunch",
        imageUrl: "/images/lunch-4.jpg"
    },
    {
        name: "Special Sea Food Dish",
        price: 12,
        category: "Lunch",
        imageUrl: "/images/lunch-5.jpg"
    },
    {
        name: "Steak",
        price: 12,
        category: "Lunch",
        imageUrl: "/images/lunch-6.jpg"
    },
    {
        name: "Grilled Salmon cutlet",
        price: 15,
        category: "Dinner",
        imageUrl: "/images/dinner-1.jpg"
    },
    {
        name: "Noodle Soup",
        price: 10,
        category: "Dinner",
        imageUrl: "/images/dinner-2.jpg"
    },
    {
        name: "Omlette",
        price: 9,
        category: "Dinner",
        imageUrl: "/images/dinner-3.jpg"
    },
    {
        name: "Salmon",
        price: 10,
        category: "Dinner",
        imageUrl: "/images/dinner-4.jpg"
    },
    {
        name: "Pasta",
        price: 9.50,
        category: "Dinner",
        imageUrl: "/images/dinner-5.jpg"
    },
    {
        name: "Egg Sandwich",
        price: 10,
        category: "Dinner",
        imageUrl: "/images/dinner-6.jpg"
    },
    {
        name: "Strawberry Soda",
        price: 5.50,
        category: "Drinks",
        imageUrl: "/images/drink-1.jpg"
    },
    {
        name: "Lemonade Soda",
        price: 5.50,
        category: "Drinks",
        imageUrl: "/images/drink-2.jpg"
    },
    {
        name: "Orange Soda",
        price: 5.50,
        category: "Drinks",
        imageUrl: "/images/drink-3.jpg"
    },
    {
        name: "Rum Soda",
        price: 5.50,
        category: "Drinks",
        imageUrl: "/images/drink-4.jpg"
    },
    {
        name: "Caramel Pancakes",
        price: 8.50,
        category: "Dessert",
        imageUrl: "/images/dessert-1.jpg"
    },
    {
        name: "Parfait",
        price: 8.50,
        category: "Dessert",
        imageUrl: "/images/dessert-2.jpg"
    },
    {
        name: "Chocolate Lava Brownie",
        price: 8.50,
        category: "Dessert",
        imageUrl: "/images/dessert-3.jpg"
    },
    {
        name: "Ice Cream",
        price: 5.50,
        category: "Dessert",
        imageUrl: "/images/dessert-4.jpg"
    },
    {
        name: "Ice Cream Cupcake",
        price: 6.50,
        category: "Dessert",
        imageUrl: "/images/dessert-5.jpg"
    },
]


async function findItems()
{
    const products = await Food.find({});
    return products.map(item => item.toJSON());
}

module.exports = {
    data,
    findItems
}
