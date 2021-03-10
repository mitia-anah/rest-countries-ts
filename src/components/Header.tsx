import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <Masthead>
            <h1>Where in the world</h1>
            <div>
                <p>Theme</p>
            </div>
        </Masthead>
    )
}

const Masthead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline-start: 3rem;
    padding-inline-end: 3rem;
    border: 1px solid;
    border-style: none;
    box-shadow: 3px 3px 3px lightgrey;
`;