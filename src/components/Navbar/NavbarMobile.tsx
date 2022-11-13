import styles from './NavbarMobile.module.css';

const NavbarMobile: React.FC<any> = ({navigate}) => {
    return (
        <div className={styles['nav-mobile']}>
        <img src="/assets/icons/previous.svg" alt='Back to' onClick={() => navigate('/')}/>
        <div className={styles.previous}>Stok Pokemon</div>
        </div>
    )
}

export default NavbarMobile