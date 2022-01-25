export default function LoginForm({updateLoggedIn}) {
    function handleSubmit(){
        updateLoggedIn(true)
    }
    return (
        <div>
            <h2>Please Login to Cookie Stand Admin</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <button>Login</button>
            </form>
        </div>
    )
}