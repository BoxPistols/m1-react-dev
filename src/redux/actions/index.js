//  Global 変数
export const INC = 'INC'
export const DEC = 'DEC'

//  Global 関数 for reducer / components
export const inc = () => ({
    type: INC,
})
export const dec = () => ({
    type: DEC,
})
