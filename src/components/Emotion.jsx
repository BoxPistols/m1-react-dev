/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
// for styled _ like styled-components
import styled from '@emotion/styled'

export const Emotion = () => {
    // pat-1: variable on emotion = like native css
    const em__container = css`
        background-color: lemonchiffon;
        transition: 0.3s;
        :hover {
            cursor: pointer;
            background-color: pink;
        }
    `

    // pat-2: inline on emotion = like default React - is javascript
    const em__Spacing = css({
        margin: (0, 0, 0, 0),
        padding: (0, 24),
        // hover don't move
    })

    // pat-3: like styled-components
    const EmStyled = styled.div`
        background-color: turquoise;
        margin-top: 24px;
        padding: 12px;
        display: flex;
        align-items: center;
    `

    return (
        <EmStyled>
            <div css={em__container}>
                <h2 css={em__Spacing}>Emotion</h2>
            </div>
        </EmStyled>
    )
}
