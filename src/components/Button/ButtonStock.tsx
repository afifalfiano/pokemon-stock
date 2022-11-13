

import styles from './ButtonStock.module.css';

const ButtonStock: React.FC<any> = ({ setShowModal }) => {
    return (
        <div className={styles.header}>
            <button type='button' onClick={() => setShowModal(true)}>Update Stock</button>
        </div>
    )
}

export default ButtonStock;