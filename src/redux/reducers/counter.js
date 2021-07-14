import { PLUS, MINUS } from '../actions'

const initialState = { num: 0 }

export const count = (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            // return state + action.payload.num
            return { num: state.num + 1 }
        case MINUS:
            // return state - action.payload.num
            return { num: state.num - 1 }
        default:
            return state
    }
}
