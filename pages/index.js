import Head from 'next/head'

export default function Home() {
    return (
        <body>

            <Head>
                <title>Cookie Stand Admin</title>
            </Head>

            <Header/>

            <Main/>

            <Footer/>
 
        </body>

    )
}

function Header() {
    return(
        <p>Header</p>
    )
}

function Main() {
    return(
        <p>Main</p>
    )
}

function Footer() {
    return(
        <p>Footer</p>
    )
}
