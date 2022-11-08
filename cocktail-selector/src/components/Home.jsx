import React from 'react';
import Cocktail from '../components/Cocktail'
// import CocktailList from '../components/CocktailList'


export default function Home() {


// function Home(props) {
    return (
        <div>
        <div>
            
            <Cocktail />
            {/* <CocktailList /> */}
        </div>
        {/* <button>Search</button> */}
        <div>
        {/* <form>
        <input type="text" value={item.id} onChange={ props.handleChange} name={'name'} placeholder={'Search for a cocktail'} />
        </form> */}
        </div>
        </div>
    );
}

