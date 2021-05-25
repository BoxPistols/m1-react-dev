import { Page2 } from '../pages/Page2'
import { Rendering } from '../pages/Rendering'
import { Styles } from '../pages/Styles'

export const BasicRouter = [
    {
        path: '/rendering',
        exact: true,
        children: <Rendering />,
    },
    {
        path: '/page2',
        exact: false,
        children: <Page2 />,
    },
    {
        path: '/styles',
        exact: false,
        children: <Styles />,
    },
]
