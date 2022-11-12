/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';


const Home: React.FC<any> = ({pokemon}) => {
    const navigate = useNavigate();
    const search = useRef<any>('');
    const [data, setData] = useState(pokemon);

    const fetchData = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0');
        const json = await data.json();
        console.log(json, 'json');
        // dispatch({
        //     type: 'init',
        //     pokemon: json.results
        // })
    }

    const handleSearch = (e: any) => {
        search.current = e.target.value
        console.log(search, 'log');
        const regex = new RegExp(search.current, 'ig');
        const pokemonFilter = data.filter((item: any) => item.name.match(regex));
        setData(pokemonFilter)
        console.log(data, 'poke');
        if(search.current.length === 0) {
            setData(pokemon);
        }
      };

    useEffect(() => {
        try {
            // fetchData();
        } catch (error) {
            throw new Error("Failed Get Data");
        }
    }, [search])


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