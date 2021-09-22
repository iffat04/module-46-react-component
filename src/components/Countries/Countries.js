import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

import './Countries.css'


const Countries = () => {
    const[countries , setCountries] = useState([]);
    useEffect(()=>{
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR3HXe3RKl9se9stxKQmm2ZJ6AoKCgvabmDSjR514aONss3GIMQq2xCz2EA')
      .then(res=>res.json())
      .then(data=>setCountries(data))
    },[])
    console.log(countries)
    return (
        <div>
           <h2> i am from components/Countries/countries.js</h2>

           {/*
               countries.map(country=> <Country name={country.name} ></Country>)
           */}

           {/*
               countries.map(country=> Country(country))
           */}
          <div className="counties-container">
            {
              
                countries.map(country=>
                <Country key={country.name}
                data={country}>

                </Country>)
            }
          </div>
         

            
        </div>
    );
};

export default Countries;

