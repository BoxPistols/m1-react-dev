import styled from 'styled-components'

export const StyledComponents = () => {
    return (
        <SC_Container>
            <SC_Heading>- StyledComponents -</SC_Heading>
            <p>StyledComponents Contents</p>
        </SC_Container>
    )
}

const SC_Container = styled.div`
    border: 2px dashed teal;
    padding: 0px 2em;
    font-weight: 100;
`
const SC_Heading = styled.h2`
    margin: 0.5em;
    font-weight: 100;
`
