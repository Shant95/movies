import styles from './styles.module.css';

const MovieCard =({movie,onMoreClick})=> {
const handleClickMoreButton = () =>{
    onMoreClick(movie);
}

    return (
        <div className={styles.movieCard} onClick={handleClickMoreButton}>
            <div className={styles.image} >
                <img src={movie.image} alt={'movie'} />
            </div> 
            <div className={styles.name}>{movie.name}</div>
        </div>
    )
}

export default MovieCard;