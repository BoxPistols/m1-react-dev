import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Basic } from '../pages/Basic'

export const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/home/:id'>
                    <Home />
                </Route>
                <Route path='/basic'>
                    <Basic />
                </Route>
            </Switch>
        </>
    )
}
