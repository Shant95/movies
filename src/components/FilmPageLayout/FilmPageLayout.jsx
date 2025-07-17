
import { useMovies } from '../../hooks/useMovies';
import ButtonBookMark from '../ButtonBookMark/ButtonBookMark';
import styles from './styles.module.css';
import { useState } from 'react';

const FilmPageLayout = ({ title, onMoreClick, onAddBookMark }) => {
     const movies =useMovies()
    const [showGenres, setShowGenres] = useState(false);
    const [showCountries, setShowCountries] = useState(false);

    const genresCount = movies.reduce((sum, movie) => {
        sum[movie.genre] = (sum[movie.genre] || 0) + 1;
        return sum;
    }, {});

    const countriesCount = movies.reduce((sum, movie) => {
        sum[movie.country] = (sum[movie.country] || 0) + 1;
        return sum;
    }, {});

    const [selectedGenres, setSelectedGenres] = useState({});
    const [selectedCountries, setSelectedCountries] = useState({});

    const toggleGenres = () => setShowGenres(!showGenres);
    const toggleCountries = () => setShowCountries(!showCountries);

    const handleGenreChange = (event) => {
        const genre = event.target.name;
        const checked = event.target.checked;
        setSelectedGenres(prev => ({ ...prev, [genre]: checked }));
    };

    const handleCountryChange = (event) => {
        const country = event.target.name;
        const checked = event.target.checked;
        setSelectedCountries(prev => ({ ...prev, [country]: checked }));
    };

    const anyGenreSelected = Object.values(selectedGenres).some(Boolean);
    const anyCountrySelected = Object.values(selectedCountries).some(Boolean);

    const filteredMovies = movies.filter(movie => {
        const genreMatch = !anyGenreSelected || selectedGenres[movie.genre];
        const countryMatch = !anyCountrySelected || selectedCountries[movie.country];
        return genreMatch && countryMatch;
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
            <div className={styles.blok}>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <label className={styles.filterName}>Жанры</label>
                        <div className={styles.filterItem} onClick={toggleGenres}>
                            <h4>Все жанры</h4>
                            <p>
                                {showGenres ? (
                                    <span className={styles.arrowUp}>&#8595;</span>
                                ) : (
                                    <span className={styles.arrowDown}>&#8593;</span>
                                )}
                            </p>
                        </div>
                        {showGenres && (
                            <div className={styles.filterItemList}>
                                {Object.entries(genresCount).map(([genre, count]) => (
                                    <div key={`genre-${genre}`} className={styles.filterListItem}>
                                        <p className={styles.text}>{genre}({count})</p>
                                        <input
                                            type="checkbox"
                                            name={genre}
                                            checked={!!selectedGenres[genre]}
                                            onChange={handleGenreChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.filter}>
                        <label className={styles.filterName}>Страны</label>
                        <div className={styles.filterItem} onClick={toggleCountries}>
                            <h4>Все страны</h4>
                            <p>
                                {showCountries ? (
                                    <span className={styles.arrowUp}>&#8595;</span>
                                ) : (
                                    <span className={styles.arrowDown}>&#8593;</span>
                                )}
                            </p>
                        </div>
                        {showCountries && (
                            <div className={styles.filterItemList}>
                                {Object.entries(countriesCount).map(([country, count]) => (
                                    <div key={`country-${country}`} className={styles.filterListItem}>
                                        <p className={styles.text}>{country}({count})</p>
                                        <input
                                            type="checkbox"
                                            name={country}
                                            checked={!!selectedCountries[country]}
                                            onChange={handleCountryChange}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.movieCard}>
                    {filteredMovies.map(movie => (
                        <div key={movie.id} className={styles.card} onClick={() => onMoreClick(movie)}>
                            <div className={styles.id}>
                                <p>{movie.id}</p>
                            </div>
                            <div className={styles.image}>
                                <img src={movie.image} alt={movie.name} />
                            </div>
                            <div className={styles.information}>
                                <div className={styles.name}>
                                    <h3>{movie.name}</h3>
                                </div>
                                <div className={styles.year}>
                                    <p>{movie.time},</p>
                                    <p>{movie.year}</p>
                                </div>
                                <div className={styles.genre}>
                                    <p>{movie.country}.</p>
                                    <p>{movie.genre}</p>
                                    <p>Режиссёр:</p>
                                    <span>{movie.director}</span>
                                </div>
                            </div>
                            <ButtonBookMark
                                onAddBookMark={(e) => {
                                    e.stopPropagation(); // Останавливаем всплытие
                                    onAddBookMark(movie); // Добавляем текущий фильм
                                }}
                                isBookmarked={false} // Можно передавать статус, если нужно
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilmPageLayout;   