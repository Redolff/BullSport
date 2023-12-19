import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'	
import Home from './components/Home'
import Login from './components/Login'
import Paletas from './components/Paletas'
import DetallePaleta from './components/DetallePaleta'
import Indumentaria from './components/Indumentaria'
import ProtectedRoute from './components/ProtectedRoute'
import useAuth from '../src/hooks/useAuth.jsx'

const App = () => {	

	//const [isActive, setActive] = useState(false)
	const { isAuthenticated, login, logout } = useAuth()
	
	return (
		<div className='app'>
			<NavBar 
				//isActive={isActive}
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
						//isActive ? 
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
					element={<Indumentaria />} 
				/>
				<Route 
					path='/login' 
					element={<Login 
								isAuthenticated={isAuthenticated}
								login={login}
								logout={logout}
								//isActive={isActive} 
							/>} 
				/>
			</Routes>
		</div>
	)
}

export default App
