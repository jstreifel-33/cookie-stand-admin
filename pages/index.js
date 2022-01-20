import Head from 'next/head'

export default function Home() {
    return (
        <body>

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
        <div className='bg-green-600 p-4'>
            <h1 className='text-3xl font-bold'>Cookie Stand Admin</h1>
        </div>
    )
}

function Main() {
    return (
        <p>Main</p>
    )
}

function Footer() {
    return (
        <div className='bg-green-600 p-4'>
            <p className='text-sm'>&#169;2021</p>
        </div>
    )
}
