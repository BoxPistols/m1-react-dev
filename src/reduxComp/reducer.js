// // action
export const PLUS = 'PLUS'
export const MINUS = 'MINUS'

// export const plus = () => {
//   return type: PLUS
// }

export const reducer = (state = 0, action) => {
    switch (action.type) {
        case PLUS:
            return state + 1
        default:
            return state
    }
}
