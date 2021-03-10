import React, { createContext , useEffect, useReducer, useState} from 'react'

type Languages = {
   iso639_1: string, iso639_2: string, name: string, nativeName: string
}
type Currency = {
    code: string, name: string, symbol: string
}

type Country = {
    name: string,
    flag: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: Currency[],
    languages: Languages[],
    translations: string[],
    regionalBlocs: string[],
    cioc: string
}

type State = {
    countries: Country[],
}
const initialState: State = {
    countries: [],
};

type Action = 
  | {type: "COUNTRY_DATA", payload: Country[]}
//   | { type: "SEARCH_COUNTRY", value: }

export const GlobalContext = createContext(initialState)

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'COUNTRY_DATA':
            return { countries: action.payload}
        default:
           return state
    }
}
export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)  
   

    async function getCountry() {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        dispatch({type: "COUNTRY_DATA", payload: data})
    }
    useEffect(() => {
        getCountry()
    },[])

    // function searchCountry() {
    //     dispatch({type: "SEARCH_COUNTRY", value: query})
    // }
    return (
        <GlobalContext.Provider value={{ 
            countries: state.countries}}>
            {children}
        </GlobalContext.Provider>
    )
}















