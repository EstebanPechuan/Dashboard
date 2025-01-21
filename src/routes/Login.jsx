import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    
    const handleLogin = () => {
        if (name.trim() && password.trim()) {
            if (login(name, password)) {
                navigate('/overview')
            } else {
                setError('Incorrect User or Password')
            }
        } else {
            setError('Please fill the inputs')
        }
    }

    
    return (
        <div className="login">
            <div className="loginForm">
                <h1>Log in</h1>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Username"
                    />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />

                <button onClick={handleLogin}>Log in</button>

                {error && <p style={{ color:'red' }}>{error}</p>}
            </div>
        </div>
    )
}