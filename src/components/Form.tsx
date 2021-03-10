import React, { useContext, useState } from 'react'
import { GlobalContext } from './GlobalState'
import styled from 'styled-components'


export default function Form() {
    const [region, setRegion] = useState(['Africa', 'America', 'Asia', 'Europe', 'Oceania'])
    const [query, setQuery] = useState('')
   
    const context = useContext(GlobalContext)
    // const {countries} = context 
    const selectedRegion = region && region.map(region => <option value="">{region}</option>)
    console.log(selectedRegion);
    
  
    return (
        <div>
            <FormGroup action="">
                <input type="text"  value='' placeholder='Search for country...'/>
                <select name="" id="">
                   {selectedRegion}
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

