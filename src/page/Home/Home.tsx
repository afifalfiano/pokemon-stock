import { useRef, useState } from 'react';
import DataTable from '../../components/DataTable/DataTable';
import Search from '../../components/Search/Search';
import styles from './Home.module.css';

const Home: React.FC<any> = ({ pokemon = [] }) => {
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
            <Search placeholder="Cari pokemon" type="search" handleSearch={handleSearch} search={search}  />
            <DataTable dataHeader={["Nama", "Stok"]} dataRow={data} title="home"/>
            {data.length === 0 && <div className="notfound">Pokemon tidak ditemukan...</div>}
        </div>
    )
}

export default Home;