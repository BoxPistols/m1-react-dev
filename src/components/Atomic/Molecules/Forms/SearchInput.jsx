import React from 'react'
import { BtnPrimary } from '../../Atoms/Buttons/BtnPrimary'
import styled from 'styled-components'
import { InputStyle } from '../../Atoms/Forms/InputStyle'

export const SearchInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* vertical-align: baseline */}
    > * {
        margin: 0;
    }
    label {
        margin-right: 4px;
    }
    ${'' /* input {
        height: 32px;
        margin-right: 4px;
        min-width: 180px;
    } */}
`

export const SearchInput = () => {
    return (
        <SearchInputContainer>
            <label>Search: </label>
            <InputStyle placeholder='Search...' />
            <BtnPrimary children={'Search'} />
        </SearchInputContainer>
    )
}
