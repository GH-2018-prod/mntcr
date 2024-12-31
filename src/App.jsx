import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter/AppRouter'
import './scss/styles.scss'
function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App