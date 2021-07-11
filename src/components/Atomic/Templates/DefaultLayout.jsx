import React from 'react'
import { Footer } from '../Atoms/Layouts/Footer'
import { HeaderLayout } from './HeaderLayout'

export const DefaultLayout = (props) => {
    // const { children } = props
    return (
        <div>
            <HeaderLayout children={'xxx'} />
            <Footer />
        </div>
    )
}
