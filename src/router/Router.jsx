import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Basic } from '../pages/Basic'

export const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/index'>
                    <Index />
                </Route>
                <Route path='/basic'>
                    <Basic />
                </Route>
            </Switch>
        </>
    )
}
