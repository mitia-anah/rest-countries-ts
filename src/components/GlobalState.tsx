import {createContext, useEffect, useReducer, useState} from 'react'

type State = {
    country: string[]
}

type Action = {
    type: "COUNTRY_DATA"
}

async function getCountryData() {
    const response = await fetch("https://restcountries.eu");
    const countryData = await response.json();
    console.log(countryData);      
}
useEffect(() => {
    getCountryData()
}, [])
 
const initialState = {
    country: []
}

const GlobalContext = createContext(initialState)



function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'COUNTRY_DATA':
           return state.country
        default:
            return state;
    }
}
export const GlobalProvider: React.FC = ({children}) => {
    const [country, setCountry] = useState<string[]>(initialState.country);

    return <GlobalContext.Provider value={{country}}>
        {children}
    </GlobalContext.Provider>
}


export default GlobalContext