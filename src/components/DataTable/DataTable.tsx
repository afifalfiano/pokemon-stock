
import DataBody from './DataBody';
import DataHeader from './DataHeader';
import styles from './DataTable.module.css';

const DataTable: React.FC<any> = ({dataHeader, dataRow, title}) => {
    return (
    <div className={styles.table}>
        <DataHeader data={dataHeader} title={title}/>
        <DataBody data={dataRow} title={title} />
    </div>
    )
}


export default DataTable;