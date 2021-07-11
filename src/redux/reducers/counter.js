import { INCREMENT, DECREMENT } from '../actions'

const INITIAL_STATE = { value: 0 }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default:
            return state
    }
}
