import React from 'react'
import styled from '@emotion/styled'

export const Component = () => {
    return <EmStyled>ReduxApp</EmStyled>
}

const EmStyled = styled.div`
    background-color: turquoise;
    margin-top: 24px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`
