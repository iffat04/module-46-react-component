import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital}= props.data;
    //console.log(flag);
    return (
        <div className="country">
            <h3>i am from componrnt/Country/Country.js</h3>
            <h1>CountryName: {name}</h1>
            <h3>Capital: {capital}</h3>
            

           {/* <h4>Population: {population}</h4>
            <h4>Currency: {props.data.currencies[0].name}</h4>
            <h4>language:{languages[0].name} </h4>*/}
          
        </div>
    );
};

export default Country;