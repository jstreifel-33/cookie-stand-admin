import { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function CookieStandAdmin({stores, updateStores}) {


    return (
        <body className='bg-emerald-50'>

            <Header />

            <Main stores={stores} updateStores={updateStores} />

            <Footer stores={stores} />

        </body>

    )
}
