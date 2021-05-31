import React from 'react'
import styled from 'styled-components'

export const Card = (props) => {
    const { children } = props
    return <SCard>{children}</SCard>
}

const SCard = styled.div`
    background: #112;
    padding: 24px;
`

export const SC_CardsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const SC_Card = styled.div`
    margin: 24px 12px;
    padding: 32px 20px 0;
    max-width: 240px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 16px;
    background: rgb(66 72 82 / 60%);
    box-shadow: rgb(4 15 24 / 84%) 4px 4px 12px;
    img {
        width: 100%;
    }
`
export const SC_dl = styled.dl`
    text-align: left;
    dt {
        float: left;
        font-weight: 600;
    }
    dd {
        padding-left: 4px;
    }
`
