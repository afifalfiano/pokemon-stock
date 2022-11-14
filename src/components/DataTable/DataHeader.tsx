import styles from './DataTable.module.css';

const DataHeader: React.FC<any> = ({ data = [], title }) => {
    return (
        <div className={`${styles['table-header']} ${title === 'detail-pokemon' && styles['table-header-detail']}`} data-testid="table-header">
            {data.map((item: string) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    )
}


export default DataHeader;