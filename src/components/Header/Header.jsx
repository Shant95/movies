import NavButton from '../NavButton/NavButton';
import styles from './styles.module.css';
import logo from '../../images/UI/logo.png'

const Header = ({onOpenMenu,onOpenSearch,onOpenBookMark,onOpenAuthModal}) => {
    const handleClickMenu=()=>{
        onOpenMenu();
    }
  const handleClickSearch=()=>{
    onOpenSearch()
  }

  const handClickBookMark=()=>{
    onOpenBookMark()
  }

  const handleClickAuthModal=()=>{
    onOpenAuthModal()
  }

    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <a href="/" className={styles.container}>
                    <div className={styles.wrapper}>
                        <div className={styles.logo}>
                            <img src={logo} alt="logo" />
                        </div>
                        <p className={styles.title}>Good Movies</p>
                    </div>
                </a>
                <div className={styles.texts}>
                    <p className={styles.text} onClick={handleClickMenu}>Фильмы</p>
                    <p className={styles.text} onClick={handleClickMenu}>Сериалы</p>
                    <p className={styles.text}>Мультфильмы</p>
                </div>
                <div className={styles.buttonsWrapper}>
                    <NavButton text={'Буду смотреть'} onClick={handClickBookMark}/>
                    <NavButton text={'Поиск'}  onClick={handleClickSearch}/>
                    <NavButton text={'Войти'} onClick={handleClickAuthModal}/>
                </div>
            </div>
        </div>
    )
}

export default Header;