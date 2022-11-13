import styles from './DataTable.module.css';

const DataHeader: React.FC<any> = ({ data = [], title }) => {
    return (
        <div className={`${styles['table-header']} ${title === 'detail-pokemon' && styles['table-header-detail']} ${title === 'detail-pokemon-mobile' && styles['table-header-detail-mobile']}`}>
            {data.map((item: string) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    )
}


export default DataHeader;