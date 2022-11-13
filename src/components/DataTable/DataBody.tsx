
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DataTable.module.css';

const DataBody: React.FC<any> = ({ data, title }) => {
    const navigate = useNavigate();

    return (
        <div>
            {title ==='home' && data.map((item: any, index: number) => (
                <div className={styles['table-body']} key={index} onClick={() => navigate(`/detail/${item.name}`)}>
                    <div className={styles.pokename}>{item.name}</div>
                    <div>{item.stok} pcs</div>
                </div>
            ))}
        </div>
    )
}


export default DataBody;