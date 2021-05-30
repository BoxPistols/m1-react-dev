import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Basic } from '../pages/Basic'
import { Page404 } from '../pages/Page404'

export const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route path='/index'>
                    <Index />
                </Route>
                <Route path='/basic'>
                    <Basic />
                </Route>
                <Route path='*'>
                    <Page404 />
                </Route>
            </Switch>
        </>
    )
}
