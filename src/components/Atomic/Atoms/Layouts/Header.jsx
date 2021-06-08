import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

const SC_Header = styled.header`
    background-color: #abc;
    position: absolute;
    top: 0;
    width: 100vw;
    font-size: 16px;
`

const SC_HeaderLink = styled(Link)`
    margin: 0 12px;
`

export const Header = () => {
    return (
        <BrowserRouter>
            <SC_Header>
                <SC_HeaderLink to='/'>Head</SC_HeaderLink>
                <SC_HeaderLink to='/users'>Users</SC_HeaderLink>
            </SC_Header>
        </BrowserRouter>
    )
}
