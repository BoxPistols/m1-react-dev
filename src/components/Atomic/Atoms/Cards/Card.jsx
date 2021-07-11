import React from 'react'
import styled from 'styled-components'

export const Card = (props) => {
    const { children } = props
    return <ScCard>{children}</ScCard>
}

export const ScCardsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const ScCard = styled.div`
    margin: 4px;
    padding: 24px 16px 0;
    max-width: 240px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background: rgb(66 72 82 / 60%);
    box-shadow: rgb(4 15 24 / 84%) 4px 4px 12px;
    img {
        width: 100%;
    }
`
export const ScDl = styled.dl`
    text-align: left;
    dt {
        float: left;
        font-weight: 600;
    }
    dd {
        padding-left: 4px;
    }
`
