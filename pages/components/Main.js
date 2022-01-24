import CreateForm from './CreateForm'
import ReportTable from './ReportTable'

export default function Main(props) {

    return (
        <main>
            <div className='m-auto bg-emerald-300 w-3/4 px-4 py-2 rounded-md'>
                <h2 className='text-center text-2xl py-2'>Create Cookie Stand</h2>
                <CreateForm stores={props.stores} updateStores={props.updateStores} />
            </div>
            <div className='m-auto text-center py-2 flex justify-center'>
                {props.stores.length ? <ReportTable stores={props.stores} /> : <h2>No Cookie Stands Available</h2>}
            </div>
        </main>

    )
}