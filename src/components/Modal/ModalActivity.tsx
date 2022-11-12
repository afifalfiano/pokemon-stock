/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newStock, selectNewStock } from "../../store/pokemon/pokemonSlice";
import styles from "./ModalActivity.module.css"

interface ModalProps {
    onClose: (showModal: boolean) => void,
    detail: (any),
    title: string,
}

export const ModalActivity = (props: ModalProps) =>{
    const edit = useSelector(selectNewStock);
    const pcs = useRef<any>();
    const lusin = useRef<any>();
    const [totalPcs, setTotalPcs] = useState(0);
    const [totalLusin, setTotalLusin] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (props.title === 'edit') {
            pcs.current = edit.totalPcs;
            lusin.current = edit.totalLusin;
            setTotalPcs(edit.totalPcs);
            setTotalLusin(edit.totalLusin);
        }
    }, [])
    


    const inputPcsHandler = (e: any) => {
        pcs.current = e.target.value;
        setTotalPcs(1 * pcs.current);
    }

    const inputLusinHandler = (e: any) => {
        lusin.current = e.target.value;
        setTotalLusin(12 * lusin.current);
    }

    const dispatch = useDispatch();
    const onSubmitHandler = () => {
        props.onClose(false);
        dispatch(newStock({
            totalPcs: totalPcs,
            totalLusin: totalLusin,
            totalStok: totalPcs + totalLusin,
            stokSebelum: props.detail.stok,
            catatan: '',
            kegiatan: 'Update stok',
            name: props.detail.name
        }))
        if (!window.location.pathname.match(/confirmation/ig)) {
            navigate(window.location.pathname + '/confirmation');
        }
    }

return(
<div className={styles.modal}>
  <form className={styles.modalContent}>
    <div className={styles.container}>
      <h1 style={{fontSize: '20px'}}>Update Stock</h1>
      <p style={{fontSize: '14px'}}>Masukkan jumlah stok yang tersedia di rak saat ini.</p>
      <div className={styles.table}>
                <div className={styles['table-header']}>
                    <div>Nama</div>
                    <div>Jumlah</div>
                    <div>Stok</div>
                </div>
                <div>
                    <div className={styles['table-body']}>
                        <div><strong>Pcs</strong></div>
                        <div>1 x <input type="number" name="" id="" ref={pcs} onChange={inputPcsHandler} value={props.title === 'edit' && pcs.current} /></div>
                        <div> = {totalPcs}</div>
                    </div>
                    <div className={styles['table-body']}>
                        <div><strong>Lusin</strong></div>
                        <div>12 x <input type="number" name="" id="" ref={lusin} onChange={inputLusinHandler} value={props.title === 'edit' &&  lusin.current}/></div>
                        <div> = {totalLusin}</div>
                    </div>
                    <div className={styles['table-body']}>
                        <div><strong>Total stok</strong> (dalam pcs)</div>
                        <div><strong>{totalPcs + totalLusin}</strong></div>
                    </div>
                </div>
        </div>
      <div className={styles.button}>
        <button type="button" onClick={onSubmitHandler} className={styles.deletebtn}>Simpan</button>
        <button type="button" onClick={() => props.onClose(false)} className={styles.cancelbtn}>Batal</button>
      </div>
    </div>
  </form>
</div>
)
}