import React, { useContext } from 'react'
import { BrowserRouter, Link, Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { BtnPrimary } from '../components/Atomic/Atoms/Buttons/BtnPrimary'
import { BtnSecondary } from '../components/Atomic/Atoms/Buttons/BtnSecondary'
import { UserContext } from '../providers/UserProvider'
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

    const { setUserInfo } = useContext(UserContext)

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        history.push('/atomic/cards')
    }
    const onClickUser = () => {
        setUserInfo({ isAdmin: false })
        history.push('/atomic/cards')
    }

    // const { state } = useLocation()
    // const isAdmin = state ? state.isAdmin : false
    // console.log(state)

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
