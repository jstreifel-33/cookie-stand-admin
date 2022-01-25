export default function LoginForm({onLogin}) {
    function handleSubmit(event){
        event.preventDefault()
        onLogin(event.target.username.value, event.target.password.value)
    }
    return (
        <div className="flex flex-col bg-emerald-200 border border-emerald-500 border-2 w-1/2 rounded mx-auto my-4">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center text-center px-8">

                <label htmlFor="username" className="my-1 font-bold">USER NAME</label>
                <input type="text" name="username" placeholder="User Name" className="my-2" />

                <label htmlFor="password" className="my-1 font-bold">PASSWORD</label>
                <input type="password" name="password" placeholder="password" className="my-2" />

                <button type="submit" className="bg-emerald-500 rounded p-2 my-4">SIGN IN</button>
            </form>
        </div>
    )
}