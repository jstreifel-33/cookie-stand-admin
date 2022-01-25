import Head from 'next/head'
import { useState } from 'react'
import CookieStandAdmin from './components/CookieStandAdmin'
import LoginForm from './components/LoginForm'

export default function Home() {

    const [stores, updateStores] = useState([])
    const [loggedIn, updateLoggedIn] = useState(false)

    return (
        <body className='bg-emerald-50'>

            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            {loggedIn ? <CookieStandAdmin stores={stores} updateStores={updateStores}/> : <LoginForm updateLoggedIn={updateLoggedIn}/>}

        </body>

    )
}
