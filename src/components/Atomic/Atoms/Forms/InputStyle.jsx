import React from 'react'
import styled from 'styled-components'

const SInput = styled.input`
    font-size: 18px;
    padding: 4px 8px;
    color: #234;
    height: 32px;
    margin-right: 4px;
    min-width: 180px;
`

export const InputStyle = (props) => {
    const { placeholder = '' } = props
    return <SInput placeholder={placeholder}></SInput>
}
