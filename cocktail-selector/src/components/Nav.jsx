import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
        <nav className='navbar'>
        <div className='nav-center'>
            <Link to ="/">Home</Link>
            <Link to ="/listing">Cocktails</Link>
            <Link to ="/singleCocktail">Single Cocktail</Link>
            <Link to ="/about">About</Link>
            {/* <Link to ="/cocktailList">CocktailList</Link> */}
        </div>
        </nav>
        </div>
    )
}