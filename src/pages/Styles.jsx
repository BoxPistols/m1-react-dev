//  CSS Module
import cssModule from '../components/ModuleCss.module.scss'
//  Styled Components
import styled from 'styled-components'
// Emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import emoStyle from '@emotion/styled'

const title = {
    color: 'orange',
}

const StyledCss = styled.div`
    color: pink;
`
const EmoStyled = emoStyle.div`
    color: lightblue;
`

const emotionStyle = css`
    color: purple;
`

// Emotion inline
const emotionInline = css({
    color: 'khaki',
})

export const Styles = () => {
    return (
        <div>
            <h1>Styles / CSS </h1>
            <h2>inline</h2>
            <p style={title}>title</p>

            <h2>Css Module</h2>
            <p className={cssModule.title}>title</p>

            <h2>Styled JSX</h2>
            <p className='jsxTitle'>Styled JSX</p>
            <style jsx='true'>
                {`
                    .jsxTitle {
                        color: tomato;
                    }
                `}
            </style>

            <h2>Styled Components</h2>
            <StyledCss>
                <p>Styled Components</p>
            </StyledCss>

            <h2>Emotion</h2>
            <p css={emotionStyle}>Emotion</p>

            <h2>Emotion Iinline</h2>
            <p css={emotionInline}>Emotion inline</p>

            <h2>Emotion Styled</h2>
            <EmoStyled>
                <p>Emotion Styled</p>
            </EmoStyled>
        </div>
    )
}
