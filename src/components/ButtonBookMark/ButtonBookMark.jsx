import styles from './styles.module.css';

const ButtonBookMark = ({ onAddBookMark, isBookmarked }) => {
    return (
        <div 
            className={`${styles.button} ${isBookmarked ? styles.bookmarked : ''}`}
            onClick={onAddBookMark}
        >
            <p>{isBookmarked ? 'Удалить из закладок' : 'Буду смотреть'}</p>
        </div>
    )
}

export default ButtonBookMark;