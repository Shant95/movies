
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router';
import Menu from './components/Menu/Menu';
import MovieModal from './components/MovieModal/MovieModal';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import Movies from './pages/Movies/Movies';
import BookMark from './components/Bookmark/Bookmark';
import AuthModal from './components/AuthModal/AuthModal';

function App() {

  const [openMenu, SetOpenMenu] = useState(false);
  const [openMovie, setOpenMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);
  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({})
  const [openBookMark, setOpenBookMark] = useState(false) // Храним лайки для каждого фильма
  const [bookmarks, setBookmarks] = useState([]);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const handleAddBookMark = (movie) => {
    setBookmarks(prev => {
      // Проверяем, есть ли уже фильм в закладках
      const exists = prev.some(item => item.id === movie.id);
      if (exists) {
        // Если есть - удаляем
        return prev.filter(item => item.id !== movie.id);
      }
      // Если нет - добавляем
      return [...prev, movie];
    });
  };

  const handleAddLike = (movieId) => {
    setLikes(prev => ({
      ...prev,
      [movieId]: (prev[movieId] || 0) + 1 // Увеличиваем счетчик лайков
    }));
  };

  const handleAddDislike = (movieId) => {
    setDislikes(prev => ({
      ...prev,
      [movieId]: (prev[movieId] || 0) + 1 // Увеличиваем счетчик лайков
    }));
  };


  const handleOpenMenu = () => {
    SetOpenMenu(true)
     setIsMenuVisible(true);
  }
  const handleCloseMenu = () => {
    SetOpenMenu(false)
    setIsMenuVisible(false);
  }
  const handleSelectMovie = (movie) => {
    setOpenMovie(movie)
    setSelectedMovie(movie)
    setOpenSearch(false)
    setOpenBookMark(false)
  }
  const handleOpenMovie = () => {
    setOpenMovie(null)
  }

  const handleOpenSearch = () => {
    setOpenSearch(true)
    setOpenMovie(false)
  }


  const handleAuthModal = () => {
    setOpenAuthModal(true)
  }

  const handleCloseSearch = () => {
    setOpenSearch(false)
  }

  const handleOpenBookMark = () => {
    setOpenBookMark(true)
  }

  const handleCloseBookMark = () => {
    setOpenBookMark(false)
  }
  const handleRemoveBookmark = (movieId) => {
    setBookmarks(prev => prev.filter(item => item.id !== movieId));
  };

  const handleCloseAuthModal = () => {
    setOpenAuthModal(false)
  }



  return (
    <div className="App" >
      <Header onOpenMenu={handleOpenMenu} onOpenSearch={handleOpenSearch} onOpenBookMark={handleOpenBookMark}
        onOpenAuthModal={handleAuthModal} />
      <div className="Container">
        <Routes>
          <Route path='/' element={<Home onMoreClick={handleSelectMovie} />} />
          <Route path='/home' element={<Home onMoreClick={handleSelectMovie} />} />
          <Route path='/movies' element={<Movies onMoreClick={handleSelectMovie} onAddBookMark={handleAddBookMark} />} />
        </Routes>
      </div>
      <Footer />
      {openMenu && <Menu onClose={handleCloseMenu} isVisible={isMenuVisible}/>}
      {openMovie && selectedMovie && <MovieModal
        movie={selectedMovie}
        onClose={handleOpenMovie}
        onAddLike={handleAddLike}
        onAddDisLike={handleAddDislike}
        likeQuantity={likes[selectedMovie.id] || 0}
        dislikeQuantity={dislikes[selectedMovie.id] || 0}
      />
      }
      {openSearch && <Search onClose={handleCloseSearch} onMoreClick={handleSelectMovie} />}
      {openBookMark && (<BookMark
        onClose={handleCloseBookMark}
        bookmarks={bookmarks} // Передаем список закладок
        onMoreClick={handleSelectMovie} // Для открытия модалки
        onRemoveBookmark={handleRemoveBookmark}
      />)}
      {openAuthModal && <AuthModal onClose={handleCloseAuthModal} />}
    </div>
  )
}


export default App;