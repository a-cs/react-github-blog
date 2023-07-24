import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import isPropValid from '@emotion/is-prop-valid'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </StyleSheetManager>
        </ThemeProvider>
    )
}

export default App
