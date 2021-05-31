import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    overflow-wrap: break-word;
    max-width: 80vw;
    margin: auto;
    font-size: 14px;
`

export const PageSub1 = () => {
    const { id } = useParams()
    //  get Quary
    const { state, search } = useLocation()
    const query = new URLSearchParams(search)

    const history = useHistory()
    const clickHistoryBack = () => history.goBack()

    return (
        <Container>
            <p>PageSub1</p>
            <div>
                <p>State: {state}</p>
                <p>Param ID: {id}</p>
                <p>Query Param: {query.get('name')}</p>
            </div>
            <div>
                <button onClick={clickHistoryBack}>clickHistoryBack</button>
            </div>
        </Container>
    )
}
