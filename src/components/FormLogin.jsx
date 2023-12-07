import useFormulario from '../hooks/useFormulario'
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import validationsForm from '../helpers/validationsForm'

const FormLogin = () => {

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

    return (
        <form>
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
            <button className="button" type="submit">Iniciar sesion</button>
        </form>
    )
}

export default FormLogin