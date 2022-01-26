import { useAuth } from "../contexts/auth"
import useResource from "../hooks/useResources"

export default function CreateForm(props) {

    const { user } = useAuth()

    const { createResource } = useResource()

    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    function simulateSales(maxCust, minCust, avgCookies) {
        let sales = []
        for (let i = 0; i < hourlySales.length; i++) {
            let customers = Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust
            let cookies = parseInt(customers * avgCookies)
            sales.push(cookies)
        }
        return sales
    }

    function handleSubmit(event) {
        event.preventDefault()

        let maxCust = parseInt(event.target.maxCust.value)
        let minCust = parseInt(event.target.minCust.value)
        let avgCookies = parseFloat(event.target.avgCookies.value)

        let sales = simulateSales(maxCust, minCust, avgCookies)

        let newStore = {
            location: event.target.location.value,
            hourly_sales: sales,
            owner: user.id,
            minimum_customers_per_hour: minCust,
            maximum_customers_per_hour: maxCust,
            average_customers_per_hour: avgCookies
        }

        createResource(newStore)
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>

            <div className='flex py-2'>
                <div className="flex flex-col grow text-center bg-emerald-200 rounded px-2 py-2 mx-1">
                    <label htmlFor="location" className="font-bold text-sm">ADD LOCATION</label>
                    <input name="location" type='text' className='grow mx-1' />
                </div>
                <button className='bg-emerald-500 w-1/4 px-2 py-2 mx-1 rounded'>CREATE STAND</button>
            </div>

            <div className='flex flex-row py-2 justify-between'>
                <div className='flex grow flex-col px-2 py-2 mx-1 bg-emerald-200 rounded'>
                    <label htmlFor="minCust" className='mx-auto font-bold text-sm'>MINIMUM CUSTOMERS PER HOUR</label>
                    <input name="minCust" type='number' />
                </div>
                <div className='flex grow flex-col px-2 py-2 mx-1 bg-emerald-200 rounded'>
                    <label htmlFor="maxCust" className='mx-auto font-bold text-sm'>MAXIMUM CUSTOMERS PER HOUR</label>
                    <input name="maxCust" type='number' />
                </div>
                <div className='flex grow flex-col px-2 py-2 mx-1 bg-emerald-200 rounded'>
                    <label htmlFor="avgCookies" className='mx-auto font-bold text-sm'>AVERAGE COOKIES PER SALE</label>
                    <input name="avgCookies" type='number' />
                </div>
            </div>

        </form>
    )
}