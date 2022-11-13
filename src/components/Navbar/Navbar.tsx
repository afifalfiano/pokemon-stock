
import ButtonStock from '../Button/ButtonStock';
import styles from './Navbar.module.css';

const Navbar: React.FC<any> = ({setShowModal, navigate}) => {
    return (
        <div className={styles.header}>
        <div className={styles.previous} onClick={() => navigate('/')}><img src="/assets/icons/previous.svg" alt='Back to' /> Stok Pokemon</div>
        <ButtonStock setShowModal={setShowModal} />
    </div>
        )
}

export default Navbar