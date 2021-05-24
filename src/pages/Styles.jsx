//  CSS Module
import css from '../components/ModuleCss.module.scss'
//  Styled Components
import styled from 'styled-components'

const title = {
    color: 'orange',
}

const StyledCss = styled.div`
    color: pink;
`

const Styles = () => {
    return (
        <div>
            <h1>Styles / CSS </h1>
            <h2>inline</h2>
            <p style={title}>title</p>

            <h2>Css Module</h2>
            <p className={css.title}>title</p>

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

            <hr />
        </div>
    )
}

export default Styles
