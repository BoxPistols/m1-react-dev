import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

const ScHeader = styled.header`
    background-color: #abc;
    position: absolute;
    top: 0;
    width: 100vw;
    font-size: 16px;
`

const ScHeaderLink = styled(Link)`
    margin: 0 12px;
`

export const Header = () => {
    return (
        <BrowserRouter>
            <ScHeader>
                <ScHeaderLink to='/'>Home</ScHeaderLink>
                <ScHeaderLink to='/users'>Users</ScHeaderLink>
            </ScHeader>
        </BrowserRouter>
    )
}
