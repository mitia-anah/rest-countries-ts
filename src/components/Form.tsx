import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalState'
import styled from 'styled-components'

export default function Form() {  
    const [query, setQuery] = useState('')  
    const [regionName, setRegionName] = useState()  
    const { countries, dispatch, region} = useContext(GlobalContext)
    console.log(region);
    
    
    function searchCountryByName() {
        const filteredCountryName = countries.filter(country => country.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        dispatch({ type: "SEARCH_COUNTRY_NAME", payload: filteredCountryName});        
    }
  
    function searchCountryByRegion() {
        // const selectRegion = e.target.value
        // const filteredRegion = region.filter(region => region.toLowerCase().includes(regionName))
        // dispatch({type: "SEARCH_COUNTRY_REGION", payload: filteredRegion})
    }

    const optionRegion = region.map(region =>  <option value={region}>{region}</option>)

    useEffect(() => {
        searchCountryByName()
    }, [query])

    return (
        <div>
            <FormGroup action="">
                <input type="text"  value={query} onChange={(e) => setQuery(e.target.value) } placeholder='Search for country...'/>
                <select name="Africa" onChange={ searchCountryByRegion} value={regionName} id="">
                   {optionRegion}
                </select>
            </FormGroup>
        </div>
    )
}

const FormGroup = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 5rem;
    flex-wrap: wrap;
    gap: 2rem;

    input, select {
        border-style: none;
        box-shadow: 2px 2px 2px lightgrey;
        border-radius: 10px;
    }

    input {
        padding: 1rem;
        width: 300px;
    }

    select, option {
        padding: 1rem;
        width: 150px;
    }
`;

