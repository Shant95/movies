import styles from './styles.module.css';
import krushenie from '../../images/carousel/kryshenie.jpeg';
import hannibal from '../../images/carousel/hannibal.jpg';
import family from '../../images/carousel/family.jpeg';
import { useState } from 'react';

const Carousel = () => {
    const images = [krushenie, hannibal, family];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Определяем индексы для предыдущего, текущего и следующего слайдов
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    return (
        <div className={styles.carousel}>
            {/* Предыдущий слайд */}
            <div className={`${styles.imageContainer} ${styles.leftSlide}`}>
                <img src={images[prevIndex]} alt="Previous slide" className={styles.image} />
            </div>

            {/* Текущий слайд */}
            <div className={`${styles.imageContainer} ${styles.centerSlide}`}>
                <img src={images[currentIndex]} alt="Current slide" className={styles.image} />
            </div>

            {/* Следующий слайд */}
            <div className={`${styles.imageContainer} ${styles.rightSlide}`}>
                <img src={images[nextIndex]} alt="Next slide" className={styles.image} />
            </div>

            <div className={styles.buttonBack} onClick={handlePrev}>
                &lt;
            </div>
            <div className={styles.buttonNext} onClick={handleNext}>
                &gt;
            </div>
        </div>
    );
};

export default Carousel;