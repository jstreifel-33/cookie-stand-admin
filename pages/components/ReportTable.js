import { hours } from '../data'
import { useAuth } from '../../contexts/auth'

export default function ReportTable(props) {

    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    const { user } = useAuth()

    function deleteIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        )
    }

    let totals = hours.map((hour, idx) => {
        let currentTotal = props.stores.reduce((total, store) => total + store.hourly_sales[idx], 0)
        return currentTotal
    })

    function handleDelete(store) {
        if (user.id == store.owner) {
            props.deleteStand(store.id)
        } else {
            alert(`You do not have permission to delete ${store.location} store!`)
        }

    }

    function renderStores() {
        return (
            props.stores.map((store, storeIdx) => {
                return (
                    <tr key={storeIdx} className={storeIdx % 2 == 0
                        ? "bg-emerald-400"
                        : "bg-emerald-300"}>

                        <td className="border border-black flex justify-between px-4 py-1">{store.location}<button onClick={() => handleDelete(store)}>{deleteIcon()}</button></td>
                        {store.hourly_sales.map((sale, idx) => <td key={idx} className="border border-black">{sale}</td>)}
                        <td className="border border-black">{store.hourly_sales.reduce((a, b) => a + b)}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <table className='w-3/4 border-collapse'>
            <thead>
                <tr className='bg-emerald-500'>
                    <th>Location</th>
                    {hours.map((hour, idx) => <th key={idx}>{hour}</th>)}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody>
                {renderStores()}
            </tbody>
            <tfoot>
                <tr className='bg-emerald-500'>
                    <th>Totals</th>
                    {totals.map((total, idx) => <th key={idx}>{total}</th>)}
                    <th>{totals.reduce((a, b) => a + b)}</th>
                </tr>
            </tfoot>
        </table>
    )
}