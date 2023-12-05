import { useState } from "react"
import '../style/form.css'
import Input from './Input'

const Login = () => {

    const [formulario, setFormulario] = useState({
        name: '',
        lastname: '',
        password: '',
        repeatPassword: '',
    })

    const handleChange = (e) => {
        e.preventDefault()
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    console.log(formulario)

    //logica del formulario -> hookPerosnalizado
    //logica del usuario, si esta registrado se muestra form de registro, si no se inicia sesion

    return (        
        <div className="container">
            <form className="form-login">
                <h1> Registrate: </h1>
                <Input 
                    label="Nombre:"
                    name="name"
                    type="text"
                    value={formulario.name} 
                    onChange={handleChange}       
                />
                <Input 
                    label="Apellido:"
                    name="lastname"
                    type="text"
                    value={formulario.lastname}  
                    onChange={handleChange}      
                />
                <Input 
                    label='Contraseña:'
                    name="password"
                    type="password"
                    value={formulario.password}   
                    onChange={handleChange}     
                />
                <Input 
                    label='Repetir contraseña:'
                    name="repeatPassword"
                    type="password"
                    value={formulario.repeatPassword}
                    onChange={handleChange}    
                />
                <button className="button" type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Login