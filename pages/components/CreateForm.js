export default function CreateForm(props) {

    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    function handleSubmit(event) {
        event.preventDefault()

        let newStore = {
            location: event.target.location.value,
            hourlySales: hourlySales
        }

        let updatedStores = props.stores.concat(newStore)
        props.updateStores(updatedStores)
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className='flex flex-col'>

            <div className='flex py-2'>
                <label htmlFor="location">Location</label>
                <input name="location" type='text' className='grow ml-1' />
            </div>

            <div className='flex flex-row py-2'>
                <div className='flex flex-col w-1/4 px-2 py-2 mx-1 bg-emerald-200 rounded'>
                    <label htmlFor="minCust" className='mx-auto'>Minimum Customers per Hour</label>
                    <input name="minCust" type='number' />
                </div>
                <div className='flex flex-col w-1/4 px-2 py-2 mx-1 bg-emerald-200 rounded'>
                    <label htmlFor="maxCust" className='mx-auto'>Maximum Customers per Hour</label>
                    <input name="maxCust" type='number' />
                </div>
                <div className='flex flex-col w-1/4 px-2 py-2 mx-1 bg-emerald-200 rounded'>
                    <label htmlFor="avgCookies" className='mx-auto'>Average Cookies per Sale</label>
                    <input name="avgCookies" type='number' />
                </div>
                <button className='bg-emerald-500 w-1/4 px-2 py-2 mx-1 rounded'>Create</button>
            </div>

        </form>
    )
}