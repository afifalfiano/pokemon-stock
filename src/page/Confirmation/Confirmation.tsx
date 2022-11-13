/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RenderModal } from '../../components/Modal/Modal';
import { ModalActivity } from '../../components/Modal/ModalActivity';
import { newStock, selectAllPokemon, selectNewStock, updateOne } from '../../store/pokemon/pokemonSlice';
import styles from './Confirmation.module.css';
const Confirmation = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)
    const data = useSelector(selectNewStock);
    const dispatch = useDispatch();
    const notes = useRef<any>('');

    const [detail, setDetailPokemon] = useState<any>();
    const pokemon = useSelector(selectAllPokemon);
    useEffect(() => {
        setDetailPokemon(pokemon.find((item: any) => item.name === data.name));
    }, [])

    const handleNotes = (e: any) => {
        notes.current = e.target.value;
    }

    const submitHandler = () => {
        dispatch(newStock({
            ...data, catatan: notes.current
        }))
        dispatch(updateOne({
            name: data.name,
            stok: data.totalStok + data.stokSebelum,
            history: {
                "waktu": new Date(),
                "kegiatan": data.kegiatan,
                "catatan": notes.current,
                "jumlah": data.totalStok,
                "total": data.totalStok + data.stokSebelum
            }
        }))
        dispatch(newStock({}));
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <h1>Konfirmasi update stok</h1>

            <div className={styles.compare}>
                <p>Selisih</p>
                <h1>+{data.totalStok} pcs</h1>
            </div>

            <div className={styles['compare-detail']}>
                <div className={styles['compare-detail-sistem']}>
                    <p>Di sistem</p>
                    <h1>{data.stokSebelum} pcs</h1>
                </div>
                <div className={styles['compare-detail-final']}>
                    <img src="/assets/icons/next.svg" alt="To be" />
                    <div>
                        <p>Hasil update stok</p>
                        <h1>{data.stokSebelum + data.totalStok} pcs</h1>
                    </div>
                </div>
            </div>

            <div className={styles.table}>
                <div className={styles['table-header']}>
                    <div>Keterangan</div>
                    <div>Detail</div>
                    <div>Jumlah</div>
                </div>
                <div className={styles['table-body']}>
                    <div><strong>Hasil update stok</strong></div>
                    <div>{data.totalPcs} pcs, {data.totalLusin / 12} lusin</div>
                    <div>{data.stokSebelum + data.totalStok} pcs  <img src="/assets/icons/edit.svg" style={{ cursor: 'pointer' }} alt="Edit" onClick={() => setShowModal(true)} /></div>
                </div>
                <div className={styles['table-body']}>
                    <div><strong>Total hasil stok</strong></div>
                    <div></div>
                    <div><strong>{data.stokSebelum + data.totalStok} pcs</strong></div>
                </div>
            </div>

            <div className={styles.notes}>
                <p><strong>Catatan</strong></p>
                <textarea name="" id="" cols={10} rows={3} placeholder='Contoh: stock awal' ref={notes} onChange={handleNotes}>

                </textarea>
            </div>

            <div className={styles.button}>
                <button type="button" className={styles.deletebtn} onClick={submitHandler}>Simpan</button>
                <button onClick={() => navigate(-1)} type="button" className={styles.cancelbtn}>Batal</button>
            </div>

            <RenderModal>
                {showModal && <ModalActivity onClose={setShowModal} detail={detail} title="edit" />}
            </RenderModal>
        </div>
    )
}

export default Confirmation;