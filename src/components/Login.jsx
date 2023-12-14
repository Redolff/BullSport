import '../style/form.css'
import FormRegistro from './FormRegistro'
import FormLogin from './FormLogin'

const Login = ({ isActive }) => {

    //logica del usuario, si esta registrado se muestra form de registro, si no se inicia sesion


    return (        
        <div className="container">
            {isActive 
                ? <FormLogin />
                : <FormRegistro />
            }
        </div>
    )
}

export default Login