import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Cocktail from './Cocktail'
import About from './About'
import SingleCocktail from './SingleCocktail'
import CocktailList from './CocktailList'
import Listing from '../components/Listing'


export default function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/cocktail" element={<Cocktail/>}/> */}
                <Route path='/cocktail/:strDrink' element={ <SingleCocktail/>} />
                <Route path="/components/listing" element={ <Listing/>} />
                <Route path="/cocktailList" element={ <CocktailList/>} />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>

    )
}