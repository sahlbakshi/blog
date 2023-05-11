import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    async function login(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type' : 'application/json'},
            credentials: 'include',
        })
        if (response.ok) {
            setRedirect(true)
        } else {
            alert('Wrong credentials.')
        }
    }

    if (redirect) {
        return (
            <Navigate to={'/'}/>
        )
    }

    return (
        <form className="login" onSubmit={login}>
            <h2>Login</h2>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button>login</button>
        </form>
    )
}