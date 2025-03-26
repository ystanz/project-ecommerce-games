import { BrowserRouter } from 'react-router-dom'
import GlobalCss from './styles'
import Header from './components/Header'

import PagesRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="centralizer">
        <Header />
      </div>
      <PagesRoutes />
    </BrowserRouter>
  )
}

export default App
