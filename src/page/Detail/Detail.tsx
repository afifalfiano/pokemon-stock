/* eslint-disable react-hooks/exhaustive-deps */



import styles from './Detail.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { RenderModal } from '../../components/Modal/Modal';
import { ModalActivity } from '../../components/Modal/ModalActivity';
import { useSelector } from 'react-redux';
import { selectAllPokemon } from '../../store/pokemon/pokemonSlice';
import { selectViewport } from '../../store/screen/screenSlice';

export interface DetailPokemon {

}

const Detail: React.FC = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    const [showModal, setShowModal] = useState<any>(false)
    const [detail, setDetailPokemon] = useState<any>();
    const pokemon = useSelector(selectAllPokemon);
    const viewport = useSelector(selectViewport);

    useEffect(() => {
        setDetailPokemon(pokemon.find((item: any) => item.name === name));
    }, [detail])


    return (
        <>
            {
                viewport < 600 && (
                    <div className={styles['nav-mobile']}>
                    <img src="/assets/icons/previous.svg" alt='Back to' onClick={() => navigate('/')}/>
                    <div className={styles.previous}>Stok Pokemon</div>
                    </div>
                )
            }
        <div className={styles['container-detail']}>
            {
                viewport >= 600 && (
                <div className={styles.header}>
                    <div className={styles.previous} onClick={() => navigate('/')}><img src="/assets/icons/previous.svg" alt='Back to' /> Stok Pokemon</div>
                    <button type='button' onClick={() => setShowModal(true)}>Update Stock</button>
                </div>
                )
            }
            <div className={styles.pika}>
                <h1 style={{ textTransform: 'capitalize' }}>{name}</h1>
            </div>

            {
                viewport < 600 && (
                    <div className={styles.header}>
                    <button type='button' onClick={() => setShowModal(true)}>Update Stock</button>
                    </div>
                )
            }

            <div className={styles.stock}>
                <p>Sisa stok</p>
                <h2>{detail?.stok} pcs</h2>
            </div>

            <div className={styles['history-stock']}>
                <p>Riwayat Stok</p>
                <p>Satuan stok dalam pcs</p>
            </div>

            
            {viewport >= 600 && (
            <div className={styles.table}>
            <div className={styles['table-header']}>
                <div>Waktu</div>
                <div>Kegiatan</div>
                <div>Catatan</div>
                <div>Jumlah</div>
                <div>Stok</div>
            </div>
            <div>
                {detail?.history.map((item: any, index: number) => (
                    <div className={styles['table-body']} key={index}>
                        <div>{new Date(item.waktu).toLocaleString('id-ID', { hour12: false })}</div>
                        <div>{item.kegiatan}</div>
                        <div>{item.catatan}</div>
                        <div>{item.jumlah === 0 ? item.jumlah : '+' + item.jumlah}</div>
                        <div>{item.total} pcs</div>
                    </div>
                ))}
                </div>
            </div>
            )}

            {viewport < 600 && (
                            <div className={styles.table}>
                            {detail?.history.map((item: any, index: number) => (
                                <>
                                <div className={styles['table-header']}>
                                    <div>{new Date(item.waktu).toLocaleDateString('id-ID')}</div>
                                    <div>Jumlah</div>
                                    <div>Stok</div>
                                </div>
                                <div>
                                    <div className={styles['table-body']} key={index}>
                                        <div className={styles['table-body-mobile']}>
                                            <p>{new Date(item?.waktu).toLocaleTimeString('id-ID')}</p>
                                            <p className={styles.activity}>{item.kegiatan}</p>
                                            <p>"{item.catatan}"</p>
                                        </div>
                                        <div>{item?.jumlah === 0 ? item?.jumlah : '+' + item?.jumlah}</div>
                                        <div>{item?.total} pcs</div>
                                    </div>
                                </div>
                                </>
                                ))}
                            </div>
            )}
            <RenderModal>
                {showModal && <ModalActivity onClose={setShowModal} detail={detail} title="add" />}
            </RenderModal>
        </div>
        </>
    )
}

export default Detail;