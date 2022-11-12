/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataDummy } from '../../dummy';
import { pokemonReducer } from '../../reducers/pokemonReducer';
import styles from './Home.module.css';


const Home: React.FC<any> = ({pokemon}) => {
    const navigate = useNavigate();

    const fetchData = async () => {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0');
        const json = await data.json();
        console.log(json, 'json');
        // dispatch({
        //     type: 'init',
        //     pokemon: json.results
        // })
    }

    useEffect(() => {
        try {
            // fetchData();
        } catch (error) {
            throw new Error("Failed Get Data");
        }
    }, [])


    return (
        <div className={styles.container}>
            <h1>Stok Pokémon</h1>

        
            <div className={styles.table}>
                <div className={styles['table-header']}>
                    <div>Nama</div>
                    <div>Stok</div>
                </div>
                <div>
                    {pokemon.map((item: any, index: number) => (
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