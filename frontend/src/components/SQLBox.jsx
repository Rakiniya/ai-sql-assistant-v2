export default function SQLBox({ sql }) {

    if (!sql) return null;

    return (
        <div className="card">
            <h2>Generated SQL</h2>

            <pre>
                <code>{sql}</code>
            </pre>

        </div>
    );
}