import styles from './styles.module.css';

const BookMark = ({ onClose, bookmarks, onMoreClick, onRemoveBookmark }) => {
    const handleMovieClick = (movie) => {
        onMoreClick(movie);
    };

    const handleRemoveClick = (movieId, e) => {
        e.stopPropagation(); // Предотвращаем всплытие события, чтобы не срабатывал handleMovieClick
        onRemoveBookmark(movieId);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Мои закладки</h2>
                <button className={styles.closeButton} onClick={onClose}>×</button>
            </div>

            <div className={styles.content}>
                {bookmarks.length === 0 ? (
                    <p className={styles.empty}>Закладок пока нет</p>
                ) : (
                    <div className={styles.list}>
                        {bookmarks.map(movie => (
                            <div
                                key={movie.id}
                                className={styles.item}
                                onClick={() => handleMovieClick(movie)}
                            >
                                <img
                                    src={movie.image}
                                    alt={movie.name}
                                    className={styles.image}
                                />
                                <div className={styles.info}>
                                    <h3 className={styles.title}>{movie.name}</h3>
                                    <p className={styles.year}>{movie.year}</p>
                                </div>
                                <button 
                                    className={styles.removeButton}
                                    onClick={(e) => handleRemoveClick(movie.id, e)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookMark;