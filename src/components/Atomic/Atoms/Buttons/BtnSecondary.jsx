import React from 'react'
import styled from 'styled-components'
import { BtnBase } from './BtnBase'

const ButtonExtend = styled(BtnBase)`
    border-radius: 0;
    background: teal;
`

export const BtnSecondary = (props) => {
    const { children, onClick } = props
    return <ButtonExtend onClick={onClick}>{children}</ButtonExtend>
}
