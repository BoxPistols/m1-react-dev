import React from 'react'
import { connect } from 'react-redux'
import { plus, minus } from '../actions'

export const ReduxApp = ({ num, plus, minus }) => {
    return (
        <div>
            <div>num: {num}</div>
            <div>
                <button onClick={plus}>plus</button>
            </div>
            <div>
                <button onClick={minus}>minus</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ num: state.count.num })

const mapDispatchToProps = {
    plus,
    minus,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp)
