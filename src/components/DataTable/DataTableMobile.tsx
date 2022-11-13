import styles from './DataTable.module.css';

const DataTableMobile: React.FC<any> = ({ dataRow = [] }) => {
    return (
        <div>
            {dataRow.map((item: any, index: number) => (
                <div key={index}>
                    <div className={`${styles['table-header']} ${styles['table-header-detail-mobile']}`}>
                        <div>{item?.waktu}</div>
                        <div>Jumlah</div>
                        <div>Stok</div>
                    </div>
                    <div>
                        <div className={`${styles['table-body']} ${styles['table-body-detail']}` } key={index}>
                            <div className={styles['table-body-mobile']}>
                                <p>{item?.waktu_jam}</p>
                                <p className={styles.activity}>{item.kegiatan}</p>
                                <p>"{item.catatan}"</p>
                            </div>
                            <div className={styles['table-body-mobile-info']}>{item?.jumlah === 0 ? item?.jumlah : '+' + item?.jumlah}</div>
                            <div className={styles['table-body-mobile-info']}>{item?.total} pcs</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DataTableMobile;