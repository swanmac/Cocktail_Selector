import { Link } from 'react-router-dom'
import logo from '../logo.png'
export default function Nav () {
    return (
        <div>
        <nav className='navbar'>
        <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>

        </div>
        </nav>
        </div>
    )
}