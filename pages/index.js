import Head from 'next/head'
import { useState } from 'react'
import { hours } from './data'

export default function Home() {

    const [stores, updateStores] = useState([])

    return (
        <body className='bg-emerald-50'>

            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            <Header />

            <Main stores={stores} updateStores={updateStores} />

            <Footer stores={stores} />

        </body>

    )
}

function Header() {
    return (
        <header className='bg-emerald-500 p-4 mb-8'>
            <h1 className='text-3xl font-bold'>Cookie Stand Admin</h1>
        </header>
    )
}

function Main(props) {

    return (
        <main>
            <div className='m-auto bg-emerald-300 w-3/4 px-4 py-2 rounded-md'>
                <h2 className='text-center text-2xl py-2'>Create Cookie Stand</h2>
                <CreateForm stores={props.stores} updateStores={props.updateStores} />
            </div>
            <div className='m-auto text-center py-2 flex justify-center'>
                {props.stores.length ? <ReportTable stores={props.stores} /> : <p>No Cookie Stands Available</p>}
            </div>
        </main>

    )
}

function CreateForm(props) {

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


function ReportTable(props) {

    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    let totals = hours.map((hour, idx) => {
        let currentTotal = props.stores.reduce((total, store) => total + store.hourlySales[idx], 0)
        console.log(hour, currentTotal)
        return currentTotal
    })

    function renderStores() {
        return (
            props.stores.map((store, storeIdx) => {
                return (
                    <tr key={storeIdx} className={storeIdx % 2 == 0
                        ? "bg-emerald-400"
                        : "bg-emerald-300"}>

                        <td className="border border-black">{store.location}</td>
                        {hourlySales.map((sale, idx) => <td key={idx} className="border border-black">{sale}</td>)}
                        <td className="border border-black">{hourlySales.reduce((a, b) => a + b)}</td>
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

function Footer(props) {
    return (
        <footer className='bg-emerald-500 p-4'>
            <p>{props.stores.length} Locations World Wide</p>
        </footer>
    )
}
