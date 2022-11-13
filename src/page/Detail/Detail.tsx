/* eslint-disable react-hooks/exhaustive-deps */



import styles from './Detail.module.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { RenderModal } from '../../components/Modal/Modal';
import { ModalActivity } from '../../components/Modal/ModalActivity';
import { useSelector } from 'react-redux';
import { selectAllPokemon } from '../../store/pokemon/pokemonSlice';
import { selectViewport } from '../../store/screen/screenSlice';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Navbar from '../../components/Navbar/Navbar';
import ButtonStock from '../../components/Button/ButtonStock';
import DataTable from '../../components/DataTable/DataTable';
import TitleDetail from './TitleDetail';

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
        {viewport < 600 && <NavbarMobile navigate={navigate} />}
        <div className={styles['container-detail']}>
            {viewport >= 600 && <Navbar setShowModal={setShowModal} navigate={navigate} />}
            <TitleDetail title="pokemon" name={name} />
            {viewport < 600 && <ButtonStock  setShowModal={setShowModal} />}
            <TitleDetail title="stock" stock={detail?.stok} />
            <TitleDetail title="history-stock" />

            {viewport >= 600 && <DataTable dataHeader={["Waktu", "Kegiatan", "Catatan", "Jumlah", "Stok"]} dataRow={detail?.history} title="detail-pokemon"/>}
            {viewport >= 600 && detail?.history.length === 0 && <div className="notfound">Tidak ada riwayat transaksi...</div>}
            {viewport < 600 && <DataTable dataHeader={["Waktu", "Jumlah", "Stok"]} dataRow={detail?.history} title="detail-pokemon-mobile"/>}
            {viewport < 600 && detail?.history.length === 0 && <div className="notfound">Tidak ada riwayat transaksi...</div>}
            <RenderModal>{showModal && <ModalActivity onClose={setShowModal} detail={detail} title="add" />}</RenderModal>
        </div>
        </>
    )
}

export default Detail;