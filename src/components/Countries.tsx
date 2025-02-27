import React, {useContext} from 'react'
import {GlobalContext} from './GlobalState'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function Countries() {
    const context = useContext(GlobalContext);
    const {countries} = context;
    console.log(countries);
    

    return (
        <ListWrapper>
            {countries && countries.map(country => (
                 <Link  to={`/country/${country.name}`}>
                    <List id={country.name}>
                            <div>
                                <Image src={country.flag} alt={country.flag}/>
                            </div>
                            <div>
                                <h2>{country.name}</h2>
                                <p>{country.population}</p>
                                <p>{country.region}</p>
                                <p>{country.capital}</p>
                            </div>
                    </List>
                </Link>
            ))}
        </ListWrapper>
    )
}

const ListWrapper = styled.ul`
   

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
`;
const List = styled.li`
    list-style: none;
`;
const Image = styled.img`
    width: 80%;

    
    @media (min-width: 800px) {
        max-width: 200px;
    }
    
`;