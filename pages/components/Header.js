import { useAuth } from "../../contexts/auth"

export default function Header() {

    const {logout} = useAuth()
    return (
        <header className='bg-emerald-500 p-4 mb-8 flex justify-between items-center'>
            <h1 className='text-3xl font-bold'>Cookie Stand Admin</h1>
            <button className='px-2 bg-gray-50 rounded'>Overview</button>
            <button onClick={logout} className='px-2 bg-gray-50 rounded'>Logout</button>
            
        </header>
    )
}