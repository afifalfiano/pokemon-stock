
import styles from './Button.module.css';

const Button: React.FC<any> = ({title, onSubmitHandler, onClose}) => {
    return (
        <div className={styles.button}>
            {title === 'Simpan' && <button type="button" className={styles.primary}  onClick={onSubmitHandler}>{title}</button>}
            {title === 'Batal' && <button type="button" className={styles.secondary} onClick={onClose}>{title}</button>}
        </div>
    )
}

export default Button;