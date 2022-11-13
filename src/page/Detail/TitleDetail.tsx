
import styles from './Detail.module.css';
const TitleDetail: React.FC<any> = ({ title, name, stock }) => {
    return (
        <>
            {title === 'pokemon' && (
                <div className={styles.pika}>
                    <h1 style={{ textTransform: 'capitalize' }}>{name}</h1>
                </div>
            )}

            {title === 'stock' && (
                <div className={styles.stock}>
                    <p>Sisa stok</p>
                    <h2>{stock} pcs</h2>
                </div>
            )}

            {title === 'history-stock' && (
                <div className={styles['history-stock']}>
                    <p>Riwayat Stok</p>
                    <p>Satuan stok dalam pcs</p>
                </div>
            )}
        </>
    )
}

export default TitleDetail;