//  Load Global 変数 from Actions
import { INC, DEC } from '../actions'
// init
const init = { num: 0 }
//  Switch 指示書
export const count = (state = init, action) => {
    switch (action.type) {
        case INC:
            return { num: state.num + 1 }
        case DEC:
            return { num: state.num - 1 }
        default:
            return state
    }
}
