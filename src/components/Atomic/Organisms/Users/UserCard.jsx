import React from 'react'
import { Card, ScCardsGrid, ScCard, ScDl } from '../../Atoms/Cards/Card'
import { UserIconWithName } from '../../Molecules/Users/UserIconWithName'

export const UserCard = (props) => {
    const { user } = props

    return (
        <Card>
            <ScCardsGrid>
                <ScCard>
                    <UserIconWithName img={user.img.url} size={user.img.size} alt={user.img.alt} name={user.name} />
                    <ScDl>
                        <dt>Mail </dt>
                        <dd> {user.mail}</dd>
                        <dt>Tel</dt>
                        <dd>{user.tel}</dd>
                        <dt>Co.</dt>
                        <dd>{user.company}</dd>
                        <dt>Web</dt>
                        <dd>{user.url}</dd>
                    </ScDl>
                </ScCard>
            </ScCardsGrid>
        </Card>
    )
}
