import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "./ModalActivity.module.css"

interface ModalProps {
    onClose: (showModal: boolean) => void,
    // dataInput: (any),
}

export const ModalActivity = (props: ModalProps) =>{
    const pcs = useRef<any>(0);
    const lusin = useRef<any>(0);
    const [totalPcs, setTotalPcs] = useState(0);
    const [totalLusin, setTotalLusin] = useState(0);
    const navigate = useNavigate();

    const inputPcsHandler = (e: any) => {
        pcs.current = e.target.value;
        setTotalPcs(1 * pcs.current);
    }

    const inputLusinHandler = (e: any) => {
        lusin.current = e.target.value;
        setTotalLusin(12 * lusin.current);
    }

    const onSubmitHandler = (body: any) => {
        props.onClose(false);
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
                        <div>1 x <input type="number" name="" id="" ref={pcs} onChange={inputPcsHandler}/></div>
                        <div> = {totalPcs}</div>
                    </div>
                    <div className={styles['table-body']}>
                        <div><strong>Lusin</strong></div>
                        <div>12 x <input type="number" name="" id="" ref={lusin} onChange={inputLusinHandler}/></div>
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