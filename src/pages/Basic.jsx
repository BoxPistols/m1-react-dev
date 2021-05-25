import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { BasicRouter } from '../router/BasicRouter'

const listStyle = {
    display: 'inline-flex',
}
const list = {
    margin: '0 4px',
    textTransform: 'capitalize',
}

export const Basic = () => {
    return (
        <BrowserRouter>
            <div>
                <ul style={listStyle}>
                    {BasicRouter.map((r) => (
                        <li style={list} key={r.path}>
                            <Link to={`/basic/${r.path}`}>{r.path}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Switch>
                <Route
                    path='/basic'
                    render={({ match: { url } }) => (
                        <Switch>
                            {BasicRouter.map((r) => (
                                <Route key={r.path} path={`${url}/${r.path}`} exact={r.exact}>
                                    {r.children}
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
            </Switch>
        </BrowserRouter>
    )
}
