import React from 'react';
import FoodList from './FoodList.js';

export default function MenuItems(props)
{
    const category = {
        breakfast: 'breakfast',
        lunch: 'lunch',
        dinner: 'dinner',
        drinks: 'drinks',
        dessert: 'dessert',
    }

    return(
        <div>
            <FoodList category={category[props.category]}/>
        </div>
    )
}