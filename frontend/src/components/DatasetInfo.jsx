export default function DatasetInfo({ dataset }) {

    if (!dataset) return null;

    return (

        <div className="card">

            <h2>Dataset Information</h2>

            <p><b>Table:</b> {dataset.table_name}</p>

            <p><b>Rows:</b> {dataset.rows}</p>

            <p><b>Columns:</b> {dataset.columns.length}</p>

        </div>

    );

}