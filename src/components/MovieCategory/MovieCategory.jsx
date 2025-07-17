import { useMovies } from '../../hooks/useMovies';
import styles from './styles.module.css';

const MovieCategory = ({ title, textColor, genre, onMoreClick }) => {
     const movies =useMovies()
    const filteredMovies = movies.filter(movie => movie.genre === genre);

    const handleClickButton = (movie) => {
        onMoreClick(movie)
    }

    return (
        <div className={styles.movieCategory}>
            <div className={styles.titleContainer}>
                <h2 className={`${styles.title} ${textColor ? styles[textColor] : ''}`}>{title}</h2>
            </div>
            <div className={styles.cardsContainer}>
                {filteredMovies.map(movie => (
                    <div key={movie.id} className={styles.movieCard} onClick={() => handleClickButton(movie)}
                    >
                        <div className={styles.image} >
                            <img src={movie.image} alt={'movie'} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieCategory;