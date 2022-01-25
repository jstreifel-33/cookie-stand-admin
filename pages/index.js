import Head from 'next/head'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'
import CookieStandAdmin from './components/CookieStandAdmin'
import LoginForm from './components/LoginForm'

export default function Home() {

    const [stores, updateStores] = useState([])
    const [loggedIn, updateLoggedIn] = useState(false)
    const {user, login} = useAuth()

    return (
        <body className='bg-emerald-50'>

            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            {user ? <CookieStandAdmin stores={stores} updateStores={updateStores}/> : <LoginForm onLogin={login}/>}

        </body>

    )
}
