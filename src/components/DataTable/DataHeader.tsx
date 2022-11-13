import styles from './DataTable.module.css';

const DataHeader: React.FC<any> = ({ data }) => {
    return (
        <div className={styles['table-header']}>
            {data.map((item: string) => (
                <div>{item}</div>
            ))}
        </div>
    )
}


export default DataHeader;