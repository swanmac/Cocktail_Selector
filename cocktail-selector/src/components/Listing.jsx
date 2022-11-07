
import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Listing () {

    let { id } = useParams()

    const [cocktail, setCocktail, showCocktail] = useState(null)

useEffect(()=>{   
    const getData = async () =>{ 
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${id}`)  
    console.log(response.data.cocktails)  
    setCocktail(response.data.cocktails)
    }
getData()

}, [])

if(!cocktail) {
    return <h2>Loading Drink...</h2>
}else{
    return (
        <div className='cocktail'>
        <div className='img-container'>
        <h1>{id}</h1>
        </div>
        <div className='cocktails-center'>
        {
        <div key={cocktail.strIngredient}
        className=''>
        <div className='preview'>
        <h3>{cocktail.strDescription}</h3>
        <h3>{cocktail.strABV}</h3>
        </div>
        </div>
        }
        </div>   
        </div>
    )
}}