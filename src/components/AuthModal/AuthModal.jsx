import Modal from '../Modal/Modal';
import styles from './styles.module.css';
import { useState } from 'react';
import tick from '../../images/UI/tick.png';

const AuthModal = ({ onClose }) => {
    const [phone, setPhone] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [stepIndex, setStepIndex] = useState(0);
    const STEPS = ['AUTH', 'OTP', 'SUCCESS'];

    // Обработчик номера телефона
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        if (value.startsWith("8") && value.length === 11) value = "7" + value.slice(1);
        setPhone(value);
    };

    // Обработчик кода подтверждения
    const handleOtpChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 4) {
            setOtpCode(value);
        }
    };

    // Проверка российского номера
    const isValidRussianPhone = (phone) => {
        const cleanPhone = phone.replace(/\D/g, "");
        return cleanPhone.length === 11 && (cleanPhone.startsWith("7") || cleanPhone.startsWith("8"));
    };

    // Проверка кода подтверждения
    const isValidOtp = (code) => {
        return code.length === 4;
    };

    const onBack = () => setStepIndex((prev) => prev - 1);
    const onNext = () => setStepIndex((prev) => prev + 1);

    const ModalContent = {
        AUTH: (
            <Modal title={'Войти или зарегистрироваться'} onClose={onClose}>
                <div className={styles.authModal}>
                    <p className={styles.text}>Мы отправим код из 4 цифр для подтверждения номера</p>
                    <label htmlFor="tel" className={styles.label}>Номер телефона*</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (XXX) XXX-XX-XX"
                        className={styles.input}
                        inputMode="numeric"
                        maxLength={16}
                    />
                    <div className={styles.divider}></div>
                    <button
                        className={styles.button}
                        onClick={onNext}
                        disabled={!isValidRussianPhone(phone)}
                    >
                        Получить код
                    </button>
                </div>
            </Modal>
        ),
        OTP: (
            <Modal title={'Подтвердите номер телефона'} onClose={onClose}>
                <div className={styles.authModal}>
                    <p className={styles.text}>Введите код, который отправили вам по СМС</p>
                    <input
                        type="text"
                        name="code"
                        id="code"
                        value={otpCode}
                        onChange={handleOtpChange}
                        placeholder="Введите 4 цифры"
                        className={styles.input}
                        inputMode="numeric"
                        maxLength={4}
                    />
                    <span className={styles.span} onClick={onBack}>
                        Изменить номер телефона
                    </span>
                    <div className={styles.divider}></div>
                    <button
                        className={styles.button}
                        onClick={onNext}
                        disabled={!isValidOtp(otpCode)}
                    >
                        Отправить
                    </button>
                </div>
            </Modal>
        ),
        SUCCESS: (
            <Modal onClose={onClose}>
                {(handleCloseModal) => (
                    <div className={styles.authModal}>
                        <div className={styles.tickImage}>
                            <img src={tick} alt="success" />
                        </div>
                        <h2 className={styles.successText}>Ваш кинотеатр готов к просмотру</h2>
                        <button className={styles.button} onClick={handleCloseModal}> Начать просмотр
                        </button>
                    </div>
                )}
            </Modal>
        )
    };

    return ModalContent[STEPS[stepIndex]];
};

export default AuthModal;