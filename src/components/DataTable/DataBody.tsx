
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DataTable.module.css';

const DataBody: React.FC<any> = ({ data = [], title }) => {
    const navigate = useNavigate();

    return (
        <div data-testid="table-body-wrap">
            {title === 'home' && data.map((item: any, index: number) => (
                <div className={styles['table-body']} key={index} onClick={() => navigate(`/detail/${item.name}`)} style={{ cursor: 'pointer' }} data-testid="table-body">
                    <div className={styles.pokename}>{item.name}</div>
                    <div>{item.stok} pcs</div>
                </div>
            ))}
            {title === 'detail-pokemon' && data.map((item: any, index: number) => (
                <div className={styles['table-body']} key={index} data-testid="table-body">
                    <div className={styles['table-body-fill']}>{item?.waktu} {item?.waktu_jam}</div>
                    <div className={styles['table-body-fill']}>{item.kegiatan}</div>
                    <div className={styles['table-body-fill']}>{item.catatan}</div>
                    <div className={styles['table-body-fill']}>{item.jumlah === 0 ? item.jumlah : '+' + item.jumlah}</div>
                    <div className={styles['table-body-fill']}>{item.total} pcs</div>
                </div>
            ))}
        </div>
    )
}


export default DataBody;