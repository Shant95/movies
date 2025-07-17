import Overlay from '../Overlay/Overlay';
import styles from './styles.module.css';
import Link from '../Link/Link.jsx';

const GENRES = [
  'Боевики',
  'Военные',
  'Детективы',
  'Для Детей',
  'Документальные',
  'Драмы',
  'Исторические',
  'Комедии',
  'Криминал',
  'Мелодрамы',
  'Приключения',
  'Триллеры',
  'Ужасы',
  'Фантастика',
  'Фэнтези'
];

const COUNTRIES = [
  'Россия',
  'США',
  'Зарубежные'
];

const Menu = ({ onClose, isVisible }) => {
  return (
    <>
      <Overlay onClose={onClose} isVisible={isVisible} />
      <div 
        className={`${styles.menu} ${isVisible ? styles.show : styles.hide}`}
        aria-hidden={!isVisible}
      >
        <div className={styles.menu__section}>
          <h2 className={styles.title}>Жанры</h2>
          <nav aria-label="Жанры">
            <ul className={styles.menu__list}>
              {GENRES.map(genre => (
                <li key={genre}>
                  <Link text={genre} onClick={onClose}
                  href={'movies'} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.menu__section}>
          <h2 className={styles.title}>Страна</h2>
          <nav aria-label="Страны">
            <ul className={styles.menu__list}>
              {COUNTRIES.map(country => (
                <li key={country}>
                  <Link text={country} onClick={onClose}
                  href={'movies'} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Menu
