import React from 'react'
import { Btns } from '../components/Atomic/Atoms/Buttons/Btns.jsx'
import { Forms } from '../components/Atomic/Molecules/Forms/Forms.jsx'
import { UserCard } from '../components/Atomic/Organisms/Users/UserCard.jsx'
import { DefaultLayout } from '../components/Atomic/Templates/DefaultLayout.jsx'

const userData = {
    img: {
        url: 'https://picsum.photos/240/240/?image=433',
        size: 100,
        alt: 'kuma',
    },
    name: 'Kuma San',
    mail: 'xxxyyy@zzz.com',
    tel: '090-4444-7777',
    company: 'Max Co.',
    url: 'https://xyzqqq.com',
}

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
    {
        path: 'cards',
        exact: false,
        children: <UserCard user={userData} />,
    },
    {
        path: 'layout',
        exact: false,
        children: <DefaultLayout children={'head'} />,
    },
]
