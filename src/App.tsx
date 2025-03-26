import { BrowserRouter } from 'react-router-dom'
import GlobalCss from './styles'
import Header from './components/Header'

import PagesRoutes from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="centralizer">
        <Header />
      </div>
      <PagesRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
