import styles from './styles.module.css';
import apps from '../../images/UI/apps.png';
import app from '../../images/UI/app.png';
import google from '../../images/UI/google.png';
import rus from '../../images/UI/rus.png';
import tg from '../../images/UI/tg.webp';
import vkontakte from '../../images/UI/vkontakte.png';
import you from '../../images/UI/you.jpeg';
import logo from '../../images/UI/logo.png';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>
                <a href="/" className={styles.link}>Все сериалы</a>
                <a href="/" className={styles.link}>фильмы</a>
                <a href="/" className={styles.link}>Служба поддержки</a>
                <a href="/" className={styles.link}>Блог</a>
                <a href="/" className={styles.link}>Предложения</a>
                <a href="/" className={styles.link}>Правила рекомендаций</a>
            </div>
            <div className={styles.links}>
                <a href="/" className={styles.link}>Все мультфильмы</a>
                <a href="/" className={styles.link}>Реклама</a>
                <a href="/" className={styles.link}>Вакансии</a>
                <a href="/" className={styles.link}>Рекомендации кино</a>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <img src={apps} alt="apps" />
                </div>
                <div className={styles.icon}>
                    <img src={app} alt="app" />
                </div>
                <div className={styles.icon}>
                    <img src={google} alt="google" />
                </div>
                <div className={styles.icon}>
                    <img src={rus} alt="rus" />
                </div>
            </div>
            <div className={styles.social}>
                <div className={styles.text}>© 2003 — 2025,GoodMovies 18+</div>

                <div className={styles.items}>
                    <div className={styles.item}>
                        <img src={tg} alt="tg" />
                    </div>
                    <div className={styles.item}>
                        <img src={vkontakte} alt="vkontakte" />
                    </div>
                    <div className={styles.item}>
                        <img src={you} alt="you" />
                    </div>
                </div>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Footer;