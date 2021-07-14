import React from 'react'
import { connect } from 'react-redux'
import { inc, dec } from '../actions'

export const ReduxApp = ({ num, inc, dec }) => {
    return (
        <div>
            <h3>{num}</h3>
            {/* <button onClick={() => inc({ type: 'INC' })}>Increase counter</button> */}
            <button onClick={() => inc()}>Increase counter</button>
            <button onClick={() => dec()}>Decrease counter</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        num: state.count.num,
    }
}
// const mapDispatchToProps = {
//     inc,
//     dec,
// }

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => {
            dispatch(inc())
        },
        dec: () => {
            dispatch(dec())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp)
