import React from 'react'
import styled from 'styled-components'

export const UserIconWithName = (props) => {
    const { img, size, alt, name } = props
    return (
        <SContainer primary>
            <img style={{ maxWidth: size }} src={img} alt={alt} />
            <p data-primary data-level='info' className='card__name'>
                {name}
            </p>
        </SContainer>
    )
}

/* Styling ------------------------------------------------------------------ */
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
