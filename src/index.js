import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import { StateProvider } from './contexts/appState'
import './index.css'

render(
  <ThemeProvider>
    <StateProvider>
      <App />
    </StateProvider>
  </ThemeProvider>,
  document.getElementById('root')
)
