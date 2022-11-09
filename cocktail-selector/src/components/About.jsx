import React from "react";
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        Thank you for visiting our site, The Cocktail Selector. In the search box, just enter a few letters in the name of your favorite adult beverage and you will see a list of suggested beverages. Select the details button on any of the cocktails and you will be provided with additional details about the beverage including: the category, the cocktail glass, ingredients and instructions on how to prepare the beverage. Enjoy!!
    
      </p>
      <div className='backHome'>
      <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
}