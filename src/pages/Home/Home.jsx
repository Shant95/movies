import Carousel from '../../components/Carousel/Carousel';
import styles from './styles.module.css';
import Films from '../../components/Films/films';


const Home = ({onMoreClick}) =>{
    return (
        <div className={styles.home}>
            <div className={styles.container}>
              <Carousel/>
              <Films onMoreClick={onMoreClick}/>
            </div>
        </div>
    )
}
export default Home;