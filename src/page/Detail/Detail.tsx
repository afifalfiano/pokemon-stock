/* eslint-disable react-hooks/exhaustive-deps */



import styles from './Detail.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from 'react';
import { pokemonReducer } from '../../reducers/pokemonReducer';
import { dataDummy } from '../../dummy';

export interface DetailPokemon{

}

const Detail: React.FC = () => {
    const navigate = useNavigate();
    const {name} = useParams();
    const [pokemon, dispatch] = useReducer(pokemonReducer, dataDummy);
    const [detail, setDetailPokemon] = useState<any>();

    useEffect(() => {
      setDetailPokemon(pokemon.find((item: any) => item.name === name));
      console.log(detail, 'd');
    }, [detail])
    

    return (
        <div className={styles['container-detail']}>
            <div className={styles.header}>
                <div className={styles.previous} onClick={() => navigate('/')}>Back to Stock Pokemon</div>
                <button type='button'>Update Stock</button>
            </div>
            <div className={styles.pika}>
                <h1 style={{textTransform: 'capitalize'}}>{name}</h1>
            </div>

            <div className={styles.stock}>
              <p>Sisa stok</p>
              <h2>{detail?.stok} pcs</h2>
            </div>
            
            <div className={styles['history-stock']}>
              <p>Riwayat Stok</p>
              <p>Satuan stok dalam pcs</p>
            </div>

            <div className={styles.table}>
                <div className={styles['table-header']}>
                    <div>Waktu</div>
                    <div>Kegiatan</div>
                    <div>Catatan</div>
                    <div>Jmlh</div>
                    <div>Stok</div>
                </div>
                <div>
                    {detail?.history.map((item: any, index: number) => (
                        <div className={styles['table-body']} key={index} onClick={() => navigate(`/detail/${item.name}`)}>
                            <div>{item.waktu}</div>
                            <div>{item.kegiatan}</div>
                            <div>{item.catatan}</div>
                            <div>{item.jumlah === 0 ? item.jumlah : '+' + item.jumlah}</div>
                            <div>{item.total} pcs</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail;