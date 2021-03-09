import React, { useContext } from 'react';
import {useParams} from 'react-router-dom'
import { GlobalContext } from './GlobalState';


interface RouteParams {
    name: string
}
export default function CountryDetails() {
    const context = useContext(GlobalContext)
    const params = useParams<RouteParams>();
    const {countries} = context;

    const countryDetail = countries.find(countryName => countryName.name !== params.name)
    console.log(countryDetail);    
    const countryFlag = countryDetail && countryDetail.flag;
    const countryName = countryDetail && countryDetail.name
    const nativeName = countryDetail && countryDetail.nativeName
    console.log(nativeName);
    
    const population = countryDetail && countryDetail.population
    const region = countryDetail && countryDetail.region
    const subregion = countryDetail && countryDetail.subregion
    const capital  = countryDetail && countryDetail.capital
    const topLevelDomain = countryDetail && countryDetail.topLevelDomain
    const currencies = countryDetail && countryDetail.currencies
    const languages = countryDetail && countryDetail.languages
    
   
    

    return (
        <div>
            <div>
                <img src={countryFlag} alt=""/>
            </div>
            <div>
                <h3>{countryName}</h3>
                <div>
                    <p>{nativeName}</p>
                    <p>{population}</p>
                    <p>{region}</p>
                    <p>{subregion}</p>
                    <p>{capital}</p>
                </div>
                <div>
                    <p>{topLevelDomain?.length}</p>
                    <p>{currencies?.length}</p>
                    <p>{languages?.length}</p>
                </div>
            </div>
            <h3>{}</h3>
           
        </div>
    )
}
