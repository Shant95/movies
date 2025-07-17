import styles from './styles.module.css';

const NavButton = ({ icon, iconAlt, text,onClick }) => {
    return (
        <div className={styles.navButton} onClick={onClick}>
            < div className={styles.icon}>
                <img src={icon} alt={iconAlt} />
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default NavButton;