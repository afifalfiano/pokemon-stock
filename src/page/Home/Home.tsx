/* eslint-disable react-hooks/exhaustive-deps */


import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';


const Home: React.FC<any> = ({ pokemon }) => {
    const navigate = useNavigate();
    const search = useRef<any>('');
    const [data, setData] = useState(pokemon);

    const handleSearch = (e: any) => {
        search.current = e.target.value
        const regex = new RegExp(search.current, 'ig');
        const pokemonFilter = data.filter((item: any) => item.name.match(regex));
        setData(pokemonFilter)
        if (search.current.length === 0) {
            setData(pokemon);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Stok Pokémon</h1>

            <input type="search" ref={search} onChange={handleSearch} placeholder="Cari pokemon" />
            <div className={styles.table}>
                <div className={styles['table-header']}>
                    <div>Nama</div>
                    <div>Stok</div>
                </div>
                <div>
                    {data.map((item: any, index: number) => (
                        <div className={styles['table-body']} key={index} onClick={() => navigate(`/detail/${item.name}`)}>
                            <div>{item.name}</div>
                            <div>{item.stok} pcs</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;