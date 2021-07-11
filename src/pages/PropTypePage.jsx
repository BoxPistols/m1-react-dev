/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { lighten, between, backgroundImages } from 'polished'

export const PropTypePage = () => {
    const profiles = [
        { name: 'Taro', age: 10 },
        { name: 'Jiro', age: 12 },
        { name: 'Saburo', age: 18 },
    ]

    return (
        <Wrap>
            <EmStyled>
                <h3>PropTypePage</h3>
                <EmUl>
                    {profiles.map((profile, index) => {
                        return (
                            // <li key={index}>
                            //     {profile.name} : {profile.age}
                            // </li>
                            <User name={profile.name} age={profile.age} key={index} />
                        )
                    })}
                </EmUl>
                <p>{}</p>
            </EmStyled>
        </Wrap>
    )
}

const User = (props) => {
    return (
        <li>
            Hi, i,m {props.name} , and {props.age} years old
        </li>
    )
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

//  ===== Style =====
const Wrap = styled.div`
    display: flex;
    justify-content: center;
`
const EmStyled = styled.div`
    color: turquoise;
    margin-top: 24px;
    padding: 12px;
`
const EmUl = styled.ul`
    font-size: ${between('14px', '24px', '320px', '1280px')};
    color: ${lighten(0.35, 'orange')};
    padding: 24px;
    ${backgroundImages('linear-gradient(purple,orange)')}
`
