import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'	
import Home from './components/Home'
import Login from './components/Login'
import Paletas from './components/Paletas'
import { useState } from 'react'
import DetallePaleta from './components/DetallePaleta'

const App = () => {	

	const [isActive, setActive] = useState(false)
	
	return (
		<div className='app'>
			<NavBar 
				isActive={isActive}	
			/>
			<Routes>
				<Route 
					path='/' 
					element={<Home />} 
				/>
				<Route 
					path='/paletas' 
					element={
						isActive 
						? <Paletas />
						: null
					} 
				/>
				<Route 
					path='/paletas/:paleta_id' 
					element={<DetallePaleta />} 
				/>
				<Route 
					path='/indumentaria' 
					element={"<Indumentaria />"} 
				/>
				<Route 
					path='/login' 
					element={<Login 
								isActive={isActive} 
							/>} 
				/>
			</Routes>
		</div>
	)
}

export default App
