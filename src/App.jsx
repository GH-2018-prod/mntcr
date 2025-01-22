import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './AppRouter/AppRouter'
import './scss/styles.scss'
function App() {

  return (
    <BrowserRouter basename="/mntcr">
      <AppRouter />
    </BrowserRouter>
  )
}

export default App