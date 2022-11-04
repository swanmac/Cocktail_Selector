// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// const CocktailList = (props) => {

//   let navigate = useNavigate()

//   const showCocktail = (cocktail) => {
//     navigate(`${cocktail.id}`)
//   }

// return (
    // <section className='section'>
    //     <h2 className="section-title"> cocktails</h2>
    //     {
    //   props.cocktails.map((cocktail) => (
    //     <div className="cocktail-card" onClick={() => showCocktail(cocktail)} key={cocktail.id}>
    //       <h1>hello</h1>
    //       <img style={{ display: 'block' }} src={cocktail.img} alt={cocktail.name} />
    //       <h3>{cocktail.name}</h3>
    //     </div>
    //   ))}
    //   <div classname="backHome">
    //     <Link to="/">back to Home</Link>
    //   </div>
    
    // </section>
//   )
// }    

// export default CocktailList