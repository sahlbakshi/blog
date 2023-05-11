import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type' : 'application/json'},
        })
        if (response.status == 200) {
            alert('Registration successful.')
        } else {
            alert('Registration failed.')
        }
    }

    return (
        <form  className="register" onSubmit={register}>
            <h2>Register</h2>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button>register</button>
        </form>
    )
}