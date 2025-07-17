import styles from './styles.module.css';
import search from '../../images/UI/search.png'
import MovieCard from '../MovieCard/MovieCard';
import { useState } from 'react';
import { useMovies } from '../../hooks/useMovies';

const Search = ({ onClose, onMoreClick }) => {
   const movies =useMovies()
  const [searchTerm, setSearchTerm] = useState('')
  const filteredMovies = movies.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={styles.search}>
      <div className={styles.close} onClick={onClose}>X</div>
      <div className={styles.container}>
        <h2 >Поиск</h2>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Фильмы, сериалы и мультфильмы" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} className={styles.input} />
          <div className={styles.searchIcon}>
            <img src={search} alt='search' />
          </div>
        </div>
      </div>
      <div className={styles.movies}>
        {
          filteredMovies.length === 0 ? (
            <div className={styles.noMovie}>
              По вашему запросу ничего не найдено
            </div>
          ) : (searchTerm.trim() === '' ? (
            movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMoreClick={onMoreClick}
              />
            ))
          ) : (
            filteredMovies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMoreClick={onMoreClick}
              />
            )))
          )}
      </div>

    </div>
  )
}

export default Search;