import React from 'react'
import { Card, SC_CardsGrid, SC_Card, SC_dl } from '../../Atoms/Cards/Card'
import { UserIconWithName } from '../../Molecules/Users/UserIconWithName'

export const UserCard = (props) => {
    const { user } = props

    return (
        <Card>
            <SC_CardsGrid>
                <SC_Card>
                    <UserIconWithName img={user.img.url} size={user.img.size} alt={user.img.alt} name={user.name} />
                    <SC_dl>
                        <dt>Mail </dt>
                        <dd> {user.mail}</dd>
                        <dt>Tel</dt>
                        <dd>{user.tel}</dd>
                        <dt>Co.</dt>
                        <dd>{user.company}</dd>
                        <dt>Web</dt>
                        <dd>{user.url}</dd>
                    </SC_dl>
                </SC_Card>
            </SC_CardsGrid>
        </Card>
    )
}
