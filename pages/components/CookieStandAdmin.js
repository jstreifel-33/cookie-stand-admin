import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import useResource from '../../hooks/useResources'

export default function CookieStandAdmin() {

    const { resources, deleteResource } = useResource()

    const storeCount = resources ? resources.length : 0

    return (
        <div className='bg-emerald-50'>

            <Header />

            <Main stores={resources || []} deleteStand={deleteResource} />

            <Footer storeCount={storeCount} />

        </div>

    )
}
