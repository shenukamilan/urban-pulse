import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import SearchPage from './pages/SearchPage/SearchPage';
import PropertyPage from './pages/PropertyPage/PropertyPage';
import { useState } from 'react';

function App() {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id)); // Remove
    } else {
      setFavorites([...favorites, id]); // Add
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SearchPage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path='/property/:id' element={<PropertyPage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
