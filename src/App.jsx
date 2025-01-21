import { useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext, AuthProvider } from './context/AuthContext'
import { Sidebar } from './components/Sidebar'
import { Login } from './routes/Login'
import { Overview } from './routes/Overview'
import { Transactions } from './routes/Transactions'
import { Bills } from './routes/Bills'

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)

  return user ? children : <Navigate to={'/login'} />
}

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/overview' element={<PrivateRoute><Sidebar /><Overview /></PrivateRoute>} />
          <Route path='/transactions' element={<PrivateRoute><Sidebar /><Transactions /></PrivateRoute>} />
          <Route path='/bills' element={<PrivateRoute><Sidebar /><Bills /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
