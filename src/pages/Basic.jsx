import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Rendering } from './Rendering'
import { Page2 } from './Page2'
import { Styles } from './Styles'

const listStyle = {
    display: 'inline-flex',
}
const list = {
    margin: '0 4px',
}

export const Basic = () => {
    return (
        <BrowserRouter>
            <div>
                <ul style={listStyle}>
                    <li style={list}>
                        <Link to='/rendering'>Rendering</Link>
                    </li>
                    <li style={list}>
                        {' '}
                        <Link to='/rendering/styles'>Styles</Link>
                    </li>
                    <li style={list}>
                        <Link to='/rendering/page2'>Page2</Link>
                    </li>
                </ul>
            </div>
            {/* Switch */}
            <Switch>
                <Route
                    path='/rendering'
                    render={({ match: { url } }) => (
                        <Switch>
                            <Route exact path={url}>
                                <Rendering />
                            </Route>
                            <Route path={`${url}/styles`}>
                                <Styles />
                            </Route>
                            <Route path={`${url}/page2`}>
                                <Page2 />
                            </Route>
                        </Switch>
                    )}
                />
                {/* <Route path='/page2'>
                    <Page2 />
                </Route> */}
                {/* <Route path='/styles'>
                    <Styles />
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}
