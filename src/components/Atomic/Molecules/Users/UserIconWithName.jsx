import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../../../providers/UserProvider'

export const UserIconWithName = (props) => {
    const { img, size, alt, name } = props
    const { userInfo } = useContext(UserContext)
    const isAdmin = userInfo ? userInfo.isAdmin : false

    const editUser = () => alert('edit do')

    return (
        <SContainer primary>
            <img style={{ maxWidth: size }} src={img} alt={alt} />
            <p data-primary data-level='info' className='card__name'>
                {name}
            </p>
            {isAdmin && <SEdit onClick={editUser}>編集</SEdit>}
        </SContainer>
    )
}

/* Styling ------------------------------------------------------------------ */

const SEdit = styled.div`
    margin: 0;
    padding: 0 12px;
    height: 1.5em;
    color: white;
    background-color: teal;
    cursor: pointer;
`

export const SContainer = styled.div`
    img {
        border-radius: 50%;
    }
    p {
        color: ${(props) => (props.primary ? 'tomato' : 'teal')};
        &[data-primary='true'] {
            ${'' /* background-color: rgb(255 255 0 / 15%); */}
            font-weight: 600
        }
        &[data-level='info'] {
            color: #31708f;
            background-color: #d9edf7;
            border-color: #bce8f1;
        }
    }
`
