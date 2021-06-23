import React from 'react'
import styled from 'styled-components'

import { Btns } from '../components/Atomic/Atoms/Buttons/Btns.jsx'
import { Forms } from '../components/Atomic/Molecules/Forms/Forms.jsx'
import { UserCard } from '../components/Atomic/Organisms/Users/UserCard.jsx'
import { DefaultLayout } from '../components/Atomic/Templates/DefaultLayout.jsx'

const SCardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 24px;
    background: #212;
`

// const userData = {
//     img: {
//         url: 'https://picsum.photos/240/240/?image=433',
//         size: 100,
//         alt: 'kuma',
//     },
//     name: 'Kuma San',
//     mail: 'xxxyyy@zzz.com',
//     tel: '090-4444-7777',
//     company: 'Max Co.',
//     url: 'https://xyzqqq.com',
// }

// for Loop Card
const users = [...Array(12).keys()].map((val) => {
    return {
        id: val,
        img: {
            url: 'https://picsum.photos/240/240/?image=433',
            size: 100,
            alt: 'kuma',
        },
        name: `Kuma San - ${val + 1}`,
        mail: 'xxxyyy@zzz.com',
        tel: '090-4444-7777',
        company: 'Max Co.',
        url: 'https://xyzqqq.com',
    }
})

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
        children: (
            <SCardList>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
                {/* <UserCard user={userData} /> */}
            </SCardList>
        ),
    },
    {
        path: 'layout',
        exact: false,
        children: <DefaultLayout children={'head'} />,
    },
]
