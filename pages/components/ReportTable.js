import { hours } from '../data'
import { useAuth } from '../../contexts/auth'

export default function ReportTable(props) {

    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    const { user } = useAuth()

    let totals = hours.map((hour, idx) => {
        let currentTotal = props.stores.reduce((total, store) => total + store.hourly_sales[idx], 0)
        return currentTotal
    })

    function handleDelete(store){
        console.log(user)
        if (user.id == store.owner) {
            props.deleteStand(store.id)
        }else{
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

                        <td className="border border-black">{store.location}<button onClick={() => handleDelete(store)}>[D]</button></td>
                        {store.hourly_sales.map((sale, idx) => <td key={idx} className="border border-black">{sale}</td>)}
                        <td className="border border-black">{store.hourly_sales.reduce((a, b) => a + b)}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <table className='w-3/4'>
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
                    <th>{totals.reduce((a,b) => a + b)}</th>
                </tr>
            </tfoot>
        </table>
    )
}