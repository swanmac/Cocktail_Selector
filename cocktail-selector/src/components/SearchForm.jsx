import React from 'react'
import { useEffect, useState, useRef } from 'react'
export default function SearchForm() {
  // const { setSearchTerm } = useState()
  const searchValue = useRef('')

  const setSearchTerm = (props) => {  
  }

useEffect(() => {
    searchValue.current.focus()
  }, [])
console.log(searchValue)
  function searchCocktail() {
    setSearchTerm(searchValue.current.searchValue)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
      
    </section>
    
  )
}