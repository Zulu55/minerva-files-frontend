import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { ModalProvider } from './providers/modal_provider'
import { ThemeProvider } from './providers/theme_provider'
import { BrowserRouter } from 'react-router-dom'
import { PagesRouter } from './routes'
import Menu from './components/menu'
import { LoaderProvider } from './providers/loader_provider'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}  >
      <ModalProvider>
        <LoaderProvider>
          <ThemeProvider>
            <BrowserRouter basename='/'>
              <Menu />
              <PagesRouter />
            </BrowserRouter>
          </ThemeProvider>
        </LoaderProvider>
      </ModalProvider>
    </Provider>
  </StrictMode>
)
