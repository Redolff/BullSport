import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'	
import Home from './components/Home'
import Login from './components/Login'

const App = () => {	
	
	return (
		<div className='app'>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/paletas' element={"<Paletas />"} />
				<Route path='/indumentaria' element={"<Indumentaria />"} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
