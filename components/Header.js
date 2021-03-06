import { useAuth } from "../contexts/auth"

export default function Header() {

    const { user, logout } = useAuth()
    return (
        <header className='bg-emerald-500 p-4 mb-8 flex justify-around items-center'>
            <h1 className='text-3xl font-bold'>Cookie Stand Admin</h1>
            <div className="flex">
                <div className='mx-1 px-2 bg-emerald-100 rounded'>{user.username}</div>
                <button onClick={logout} className='mx-1 px-2 bg-emerald-600 text-emerald-50 rounded'>Sign Out</button>
                <button className='mx-1 px-2 bg-emerald-50 rounded'>Overview</button>
            </div>

        </header>
    )
}