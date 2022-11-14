
import DataBody from './DataBody';
import DataHeader from './DataHeader';
import styles from './DataTable.module.css';
import DataTableMobile from './DataTableMobile';

const DataTable: React.FC<any> = ({dataHeader, dataRow, title}) => {
    return (
    <div className={styles.table} data-testid="data-table" >
        {title !== 'detail-pokemon-mobile' && (
            <><DataHeader data={dataHeader} title={title} /><DataBody data={dataRow} title={title} /></>
        )}
        {title === 'detail-pokemon-mobile' && <DataTableMobile dataRow={dataRow} />}
    </div>
    )
}


export default DataTable;