import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
export default function SearchForm(props) {

  // const { setSearchTerm } = useState()

const [searchTerm, setSearchTerm] = useState('')

const handleSubmit = (e) => {
  e.preventdefault()
  getSearch()
}

const handleChange = (e) => {
  setSearchTerm({ ...searchTerm, ['']: e.target.value  })
  
  console.log(searchTerm[""].toLowerCase())
props.setCocktail(props.cocktail.filter(drink=>drink.strDrink.toLowerCase().includes(searchTerm[""].toLowerCase())===true))
};

const getSearch = async () => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  // setSearchTerm(response.data.drinks)
  console.log(response.data.drinks)
};

 


// useEffect(() => {
//     searchValue.current.focus()
//   }, [])
// console.log(searchValue)
//   function searchCocktail() {
//     setSearchTerm(searchValue.current.searchValue)
//   }
//   function handleSubmit(e) {
//     e.preventDefault()
//   }
  return (
    <section className='section search'>
      <form className='search-form' >
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail</label>
          <input 
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
          />
          <button onSubmit={handleSubmit}>Search</button>
        </div>
      </form> 
      
    </section>
    
  )
}