import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import SearchPage from './pages/SearchPage/SearchPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/property' element={<PropertyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
