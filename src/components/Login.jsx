import { useState } from 'react'
import '../style/form.css'
import FormRegistro from './FormRegistro'
import FormLogin from './FormLogin'

const Login = () => {

    //logica del usuario, si esta registrado se muestra form de registro, si no se inicia sesion
    const [isActive, setActive] = useState(false)


    return (        
        <div className="container">
            <FormRegistro />
        </div>
    )
}

export default Login