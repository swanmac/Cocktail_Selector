import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <Link to ="/">Home</Link>
            <Link to ="/cocktail">Cocktails</Link>
            <Link to ="/about">About</Link>
        </div>
    )
}