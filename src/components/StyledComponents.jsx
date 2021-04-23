import styled from 'styled-components'

export const StyledComponents = () => {
    return (
        <ScContainer>
            <ScHeading>- StyledComponents -</ScHeading>
            <p>StyledComponents Contents</p>
        </ScContainer>
    )
}

const ScContainer = styled.div`
    border: 2px dashed teal;
    padding: 0px 2em;
    font-weight: 100;
`
const ScHeading = styled.h2`
    margin: 0.5em;
    font-weight: 100;
`
