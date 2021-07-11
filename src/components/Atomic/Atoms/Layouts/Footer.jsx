import React from 'react'
import styled from 'styled-components'

const ScFooter = styled.footer`
    background-color: darkgray;
    position: absolute;
    bottom: 0;
    width: 100vw;
    font-size: 14px;
    text-align: center;
`
export const Footer = () => {
    return <ScFooter>&copy; 2021 dev Inc.</ScFooter>
}
