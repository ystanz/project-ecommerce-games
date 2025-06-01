import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import GlobalCss from './styles'

import PagesRoutes from './routes'
import Footer from './components/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="centralizer">
          <Header />
        </div>
        <PagesRoutes />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
