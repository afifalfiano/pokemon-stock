
import styles from './Button.module.css';

const Button: React.FC<any> = ({title, onSubmitHandler, onClose}) => {
    return (
        <div className={styles.button}>
            <button type="button" className={`${title === 'Simpan' ? `${styles.primary}` : `${styles.secondary}`}`}  onClick={title === 'Simpan' ? onSubmitHandler : onClose}>{title}</button>
        </div>
    )
}

export default Button;