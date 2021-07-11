import { PLUS, MINUS } from '../actions'

const INITIAL_STATE = { num: 0 }

export const count = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLUS:
            return state + action.payload.num
        case MINUS:
            return state - action.payload.num
        default:
            return state
    }
}
