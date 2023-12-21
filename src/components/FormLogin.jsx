import useFormulario from '../hooks/useFormulario'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import validationsForm from '../helpers/validationsForm'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const FormLogin = ({ login, logout }) => {

    const [formulario, handleChange, errors, handleSubmit] = useFormulario({
        name: '',
        lastname: '',
        email: '',
        user: '',
        password: '',
        repeatPassword: ''
    },
        validationsForm
    )

    const navigate = useNavigate()
    const { state } = useLocation()

    const handleClick = () => {
        login()
        navigate(state.location.pathname)
    }

    return (
        <form className='form-login'>
            <h1> Iniciar Sesion: </h1>
            <Input 
                label='Usuario:'
                name="user"
                type="text"
                value={formulario.user}
                onChange={handleChange} 
                required   
            />
            {errors.user && 
                <ErrorMessage 
                    error={errors.user} 
                /> 
            }
            <Input 
                label='Contraseña:'
                name="password"
                type="password"
                value={formulario.password}   
                onChange={handleChange}  
                required   
            />
            {errors.password && 
                <ErrorMessage 
                    error={errors.password} 
                /> 
            }
            <Input 
                label='Repetir contraseña:'
                name="repeatPassword"
                type="password"
                value={formulario.repeatPassword}
                onChange={handleChange} 
                required   
            />
            {errors.repeatPassword && 
                <ErrorMessage 
                    error={errors.repeatPassword} 
                /> 
            }
            <button 
                className="button" 
                type="submit"
                onClick={handleClick}
            >
                Iniciar sesion
            </button>
            <h2 className='title-secundary'>¿No tienes cuenta aun?</h2>
            <p> <Link to={'/registro'}> ¡Registrate! </Link>  </p>
        </form>
    )
}

export default FormLogin