import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cocktail ({ image, name, id, info, glass }) {

// we need to create a state for our data
const [cocktail, setCocktail] = useState([])

// we need to call an axios function
useEffect(()=> {
const getData = async () =>{
const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
console.log(response.data.drinks)
setCocktail(response.data.drinks)
    
}

getData()

}, [])

// we need to set state of our data

// we need to see the data

console.log(cocktail)

// lets also make a guard operator
// so if data takes a few seconds
// our site doesn't break

if (!cocktail) {
    return <h2> Loading please wait</h2>
} else {


    return (
        <div>
         <h3>name: {cocktail.name}</h3> 
            <h4> model: {cocktail.model}</h4>
        </div>
    )
}
}