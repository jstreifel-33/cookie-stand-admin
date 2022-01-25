export default function LoginForm({onLogin}) {
    function handleSubmit(event){
        event.preventDefault()
        onLogin(event.target.username.value, event.target.password.value)
    }
    return (
        <div>
            <h2>Please Login to Cookie Stand Admin</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}