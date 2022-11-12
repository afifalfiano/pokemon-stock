
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RenderModal } from '../../components/Modal/Modal';
import { ModalActivity } from '../../components/Modal/ModalActivity';
import styles from './Confirmation.module.css';
const Confirmation = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false)

    return (
    <div className={styles.container}>
    <h1>Konfirmasi update stok</h1>

    <div className={styles.compare}>
        <p>Selisih</p>
        <h1>+533 pcs</h1>
    </div>

    <div className={styles['compare-detail']}>
        <div className={styles['compare-detail-sistem']}>
            <p>Di sistem</p>
            <h1>10 pcs</h1>
        </div>
        <div className={styles['compare-detail-final']}>
        <img src="/assets/icons/next.svg" alt="To be"/>
        <div>
            <p>Hasil update stok</p>
            <h1>543 pcs</h1>
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
                        <div>Hasil update stok</div>
                        <div>3pcs, 14 lusin (12s)</div>
                        <div>543 pcs  <img src="/assets/icons/edit.svg" style={{cursor: 'pointer'}} alt="Edit" onClick={() => setShowModal(true)}/></div>
                    </div>
                    <div className={styles['table-body']}>
                        <div>Total hasil stok opname</div>
                        <div></div>
                        <div><strong>543 pcs</strong></div>
                    </div>
            </div>

    <div className={styles.notes}>
        <p>Catatan</p>
        <textarea name="" id="" cols={10} rows={3} placeholder='Contoh: stock awal'>

        </textarea>
    </div>

    <div className={styles.button}>
        <button type="button" className={styles.deletebtn}>Simpan</button>
        <button onClick={() => navigate(-1)} type="button" className={styles.cancelbtn}>Batal</button>
      </div>

      <RenderModal>
        {showModal && <ModalActivity onClose={setShowModal}/>}
        </RenderModal>
    </div>
    )
}

export default Confirmation;