import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import SearchPage from './pages/SearchPage/SearchPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import { FavoritesProvider } from './context/FavoritesContext';
import { PropertiesProvider } from './context/PropertiesContext';

function App() {

  return (
    <>
      <PropertiesProvider>
        <FavoritesProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<SearchPage />} />
              <Route path='/property/:id' element={<PropertyPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </FavoritesProvider>
      </PropertiesProvider>

    </>
  )
}

export default App
