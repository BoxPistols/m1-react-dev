import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReduxApp from '../../redux/components/ReduxApp'
import reducers from '../../redux/reducers'

const store = createStore(reducers)

export const Redux = () => {
    return (
        <div>
            <div>Redux</div>
            <Provider store={store}>
                <ReduxApp />
            </Provider>
        </div>
    )
}
