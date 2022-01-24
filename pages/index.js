import Head from 'next/head'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

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
