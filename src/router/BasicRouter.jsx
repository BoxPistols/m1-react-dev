import React from 'react'
import { Rendering } from '../pages/Rendering'
import { Styles } from '../pages/Styles'
import { Page2 } from '../pages/Page2'
import { PropTypePage } from '../pages/PropTypePage'
import { Redux } from '../pages/Redux'

export const BasicRouter = [
    {
        path: 'rendering',
        exact: true,
        children: <Rendering />,
    },
    {
        path: 'styles',
        exact: false,
        children: <Styles />,
    },
    {
        path: 'page2',
        exact: true,
        children: <Page2 />,
    },
    {
        path: 'PropType',
        exact: true,
        children: <PropTypePage />,
    },
    {
        path: 'Redux',
        exact: false,
        children: <Redux />,
    },
]
