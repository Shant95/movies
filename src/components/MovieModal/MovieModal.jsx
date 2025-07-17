import Footer from '../Footer/Footer';
import styles from './styles.module.css';
import like from '../../images/UI/like.png';
import dislike from '../../images/UI/dislike.png';



const MovieModal = ({ movie, onClose, onAddLike, onAddDisLike, likeQuantity, dislikeQuantity })  => {
   
    const addLike = () => {
        onAddLike(movie.id)
    }

    const addDislike = () => {
        onAddDisLike(movie.id)
    }

    return (
        <div className={styles.movie}>
            <div className={styles.close} onClick={onClose}>X</div>
            <div className={styles.container}>
                <div className={styles.bloks}>
                    <div className={styles.images}>
                        <div className={styles.image}>
                            <img src={movie.image} alt={movie.name} />
                        </div>
                        <div className={styles.trailer}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={movie.trailer}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Movie trailer"
                            ></iframe>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <h2 className={styles.name}>{movie.name}</h2>
                        </div>
                        <div className={styles.table}>
                            <h3>О фильме</h3>
                            <div className={styles.tableValue}>
                                <span className={styles.valueInfo}>{movie.description}</span>
                            </div>

                            <div className={styles.tableValue}>
                                <p className={styles.value}>Year</p>
                                <span className={styles.valueInfo}>{movie.year}</span>
                            </div>
                            <div className={styles.tableValue}>
                                <p className={styles.value}>Director</p>
                                <span className={styles.valueInfo}>{movie.director}</span>
                            </div>
                            <div className={styles.tableValue}>
                                <p className={styles.value}>Producer</p>
                                <span className={styles.valueInfo}>{movie.producer}</span>
                            </div>
                            <div className={styles.tableValue}>
                                <p className={styles.value}>Genre</p>
                                <span className={styles.genre}>{movie.genre}</span>
                            </div>
                            <div className={styles.tableValue}>
                                <p className={styles.value}>Country</p>
                                <span className={styles.valueInfo}>{movie.country}</span>
                            </div>
                            <div className={styles.tableValue}>
                                <p className={styles.value}>Time</p>
                                <span className={styles.time}>{movie.time}</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={styles.blok}>
                    <iframe
                        width="100%"
                        height="500px"
                        src={movie.trailer}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Movie trailer"
                    ></iframe>
                </div>
                <div className={styles.contents}>
                    <div className={styles.content}>
                        <button className={styles.like} onClick={addLike}>  {/* Исправлено */}
                            <img src={like} alt='like' />
                        </button>
                        <div className={styles.quantity}>{likeQuantity}</div>
                    </div>

                    <div className={styles.content}>
                        <button className={styles.dislike} onClick={addDislike}>  {/* Исправлено */}
                            <img src={dislike} alt='dislike' />
                        </button>
                         <div className={styles.quantity}>{dislikeQuantity}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MovieModal;