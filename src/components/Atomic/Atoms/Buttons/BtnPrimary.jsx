import React from 'react'
import styled from 'styled-components'
import { BtnBase } from './BtnBase'

const ButtonExtend = styled(BtnBase)`
    background: tomato;
`

export const BtnPrimary = (props) => {
    const { children, onClick } = props
    return <ButtonExtend onClick={onClick}>{children}</ButtonExtend>
}
