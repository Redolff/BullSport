import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'	
import Home from './components/Home'
import Login from './components/Login'
import Registro from './components/Registro'
import Paletas from './components/Paletas'
import DetallePaleta from './components/DetallePaleta'
import Indumentaria from './components/Indumentaria'
import ProtectedRoute from './components/ProtectedRoute'
import useAuth from '../src/hooks/useAuth.jsx'

const App = () => {	

	const { isAuthenticated, login, logout } = useAuth()
	
	return (
		<div className='app'>
			<NavBar 
				isAuthenticated={isAuthenticated}	
			/>
			<Routes>
				<Route 
					path='/' 
					element={<Home />} 
				/>
				<Route 
					path='/paletas' 
					element={
						<ProtectedRoute>
							<Paletas />
						</ProtectedRoute>
					} 
				/>
				<Route 
					path='/paletas/:paleta_id' 
					element={<DetallePaleta />} 
				/>
				<Route 
					path='/indumentaria' 
					element={
						<ProtectedRoute>
							<Indumentaria />
						</ProtectedRoute>
					} 
				/>
				<Route 
					path='/login' 
					element={<Login 
								isAuthenticated={isAuthenticated}
								login={login}
								logout={logout}
							/>} 
				/>
				<Route 
					path='/registro'
					element={<Registro 
								isAuthenticated={isAuthenticated}
								login={login}
								logout={logout}
							/>}
				/>
			</Routes>
		</div>
	)
}

export default App
