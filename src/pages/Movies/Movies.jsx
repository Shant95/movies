 import FilmPageLayout from '../../components/FilmPageLayout/FilmPageLayout';

const Movies = ({ onMoreClick, onAddBookMark }) => {
    return (
        <FilmPageLayout title={'Фильмы'} onMoreClick={onMoreClick} onAddBookMark={onAddBookMark} />
    )

}

export default Movies; 