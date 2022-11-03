import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Cocktail from './Cocktail'
import About from './About'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cocktail" element={<Cocktail/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>

    )
}