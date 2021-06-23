import React from 'react'
import { BrowserRouter, Link, Switch, Route, useHistory } from 'react-router-dom'
import { BtnPrimary } from '../components/Atomic/Atoms/Buttons/BtnPrimary'
import { BtnSecondary } from '../components/Atomic/Atoms/Buttons/BtnSecondary'
import { AtomicRouter } from '../router/AtomicRouter'

const listStyle = {
    display: 'inline-flex',
}
const list = {
    margin: '0 4px',
    textTransform: 'capitalize',
}

export const Atomic = () => {
    let history = useHistory()

    const onClickAdmin = () => history.push('/atomic/cards')
    const onClickUser = () => history.push('/atomic/cards')

    return (
        <div>
            <BtnPrimary onClick={onClickAdmin}>Admin</BtnPrimary>
            <BtnSecondary onClick={onClickUser}>User</BtnSecondary>

            <h2>Atomic</h2>
            <BrowserRouter>
                <div>
                    <ul style={listStyle}>
                        {AtomicRouter.map((r) => (
                            <li style={list} key={r.path}>
                                <Link to={`/atomic/${r.path}`}>{r.path}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Switch>
                    <Route
                        path='/atomic'
                        render={({ match: { url } }) => (
                            <Switch>
                                {AtomicRouter.map((r) => (
                                    <Route key={r.path} path={`${url}/${r.path}`} exact={r.exact}>
                                        {r.children}
                                    </Route>
                                ))}
                            </Switch>
                        )}
                    />
                    <Route
                        path='/atomic'
                        render={({ match: { url } }) => (
                            <Switch>
                                {AtomicRouter.map((r) => (
                                    <Route key={r.path} path={`${url}/${r.path}`} exact={r.exact}>
                                        {r.children}
                                    </Route>
                                ))}
                            </Switch>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
