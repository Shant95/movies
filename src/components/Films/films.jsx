import MovieCategory from '../MovieCategory/MovieCategory';
import styles from './styles.module.css';


const Films = ({onMoreClick}) => {
    return (
        <div className={styles.films}>
            <MovieCategory title={'Боевики'} genre={'боевики'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Военные'} genre={'военные'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Драмы'} genre={'драмы'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Детективы'} genre={'детективы'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Для Детей'} genre={'для детей'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Мультфильмы'} genre={'мультфильмы'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Исторические'} genre={'исторические'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Ужасы'} genre={'ужасы'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Фантастика'} genre={'фантастика'} onMoreClick={onMoreClick}/>
            <MovieCategory title={'Фэнтези'} genre={'фэнтези'} onMoreClick={onMoreClick}/>
        </div>
    )
}

export default Films;