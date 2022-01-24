import Head from 'next/head'
import { useState } from 'react'
import { hours } from './data'

export default function Home() {
    return (
        <body className='bg-emerald-50'>

            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            <Header />

            <Main />

            <Footer />

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

function Main() {
    const [stores, updateStores] = useState([])

    return (
        <main>
            <div className='m-auto bg-emerald-300 w-3/4 px-4 py-2 rounded-md'>
                <h2 className='text-center text-2xl py-2'>Create Cookie Stand</h2>
                <CreateForm />
            </div>
            <div className='mx-auto text-center py-2'>
                {stores.length ? <ReportTable stores={stores} /> : <p>No Cookie Stands Available</p>}
            </div>
        </main>

    )
}

function CreateForm(props) {

    return (
        <form className='flex flex-col'>

            <div className='flex py-2'>
                <label>Location</label>
                <input type='text' className='grow ml-1' />
            </div>

            <div className='flex flex-row py-2'>
                <div className='flex flex-col w-1/4 px-2 py-2'>
                    <label className='mx-auto'>Minimum Customers per Hour</label>
                    <input type='number' />
                </div>
                <div className='flex flex-col w-1/4 px-2 py-2'>
                    <label className='mx-auto'>Maximum Customers per Hour</label>
                    <input type='number' />
                </div>
                <div className='flex flex-col w-1/4 px-2 py-2'>
                    <label className='mx-auto'>Average Cookies per Sale</label>
                    <input type='number' />
                </div>
                <button className='bg-emerald-500 w-1/4 px-2 py-2'>Create</button>
            </div>

        </form>
    )
}


function ReportTable(props) {

    const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

    function renderStores() {
        props.stores.map(store => {
            <tr>
                <td>{store.location}</td>
                {hourlySales.map((sale, idx) => <td key={idx}>{sale}</td>)}
                <td>{store.total}</td>
            </tr>
        })
    }

    return (
        <table>
            <tr>
                <th>Location</th>
                {hours.map((hour, idx) => <th key={idx}>{hour}</th>)}
                <th>Totals</th>
            </tr>
            {renderStores()}
        </table>
    )
}

function Footer() {
    return (
        <footer className='bg-emerald-500 p-4'>
            <p className='text-sm'>&#169;2021</p>
        </footer>
    )
}
