import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Cocktail from './Cocktail'
import About from './About'
import SingleCocktail from './SingleCocktail'



export default function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cocktail" element={<Cocktail/>}/>
                <Route path='/cocktail/:id' element={ <SingleCocktail/>} />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>

    )
}