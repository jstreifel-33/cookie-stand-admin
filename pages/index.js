import Head from 'next/head'

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
    let fakeJson = '{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}'
    return (
        <main>
            <div className='m-auto bg-emerald-300 w-3/4 px-4 py-2 rounded-md'>
                <h2 className='text-center text-2xl py-2'>Create Cookie Stand</h2>
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
            </div>
            <div className='mx-auto text-center py-2'>
                <p className='py-4'> Report Table Coming Soon...</p>
                <p className='py-4'>{fakeJson}</p>
            </div>
        </main>

    )
}

function Footer() {
    return (
        <footer className='bg-emerald-500 p-4'>
            <p className='text-sm'>&#169;2021</p>
        </footer>
    )
}
