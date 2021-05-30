import React from 'react'
import { BtnPrimary } from './BtnPrimary'
import { BtnSecondary } from './BtnSecondary'

export const Btns = () => {
    return (
        <div>
            <h3>Buttons</h3>

            <BtnPrimary children={'Btn Primary'} />
            <br />
            <BtnSecondary children={'BtnSecondary'} />
        </div>
    )
}
