import React from 'react'
import { Btns } from '../components/Atomic/Atoms/Buttons/Btns.jsx'
import { Forms } from '../components/Atomic/Molecules/Forms/Forms.jsx'

export const AtomicRouter = [
    {
        path: 'buttons',
        exact: false,
        children: <Btns />,
    },
    {
        path: 'forms',
        exact: false,
        children: <Forms />,
    },
]
