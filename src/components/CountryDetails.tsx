import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { GlobalContext } from './GlobalState';


export default function CountryDetails() {
    const context = useContext(GlobalContext)
    const {countries} = context;

    type RouteParams = {
        name: string
    }
    const { name } = useParams<RouteParams>();
    console.log(name);     
    
    const countryDetail = countries.find(countryName => countryName.name === name)
    console.log(countryDetail);    
    const countryFlag = countryDetail && countryDetail.flag;
    const countryName = countryDetail && countryDetail.name
    const nativeName = countryDetail && countryDetail.nativeName
    
    const population = countryDetail && countryDetail.population
    const region = countryDetail && countryDetail.region
    const subregion = countryDetail && countryDetail.subregion
    const capital  = countryDetail && countryDetail.capital
    const topLevelDomain = countryDetail && countryDetail.topLevelDomain
    const currencies = countryDetail && countryDetail.currencies.map(cur => cur.name)
    const languages = countryDetail && countryDetail.languages.map(lang => lang.name)
    const border = countryDetail && countryDetail.borders.map(border => <button>{border}</button>) 
   
    return (
        <div>
            <div>
                <img src={countryFlag} alt=""/>
            </div>
            <div>
                <h3>{countryName}</h3>
                <div>
                    <p>Native Name: {nativeName}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Sub Region: {subregion}</p>
                    <p>Capital: {capital}</p>
                </div>
                <div>
                    <p>Top Level Domain: {topLevelDomain}</p>
                    <p>Currency: {currencies}</p>
                    <p>Languages: {languages}</p>
                </div>
            </div>
            <div>{border}</div>           
        </div>
    )
}
