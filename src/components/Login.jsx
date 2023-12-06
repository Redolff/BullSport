import '../style/form.css'
import useFormulario from "../hooks/useFormulario"
import Input from './Input'
import ErrorMessage from './ErrorMessage'
import validationsForm from '../helpers/validationsForm'

const Login = () => {

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

    //logica del usuario, si esta registrado se muestra form de registro, si no se inicia sesion

    return (        
        <div className="container">
            <form className="form-login" onSubmit={handleSubmit}>
                <h1> Registrate: </h1>
                <Input 
                    label="Nombre:"
                    name="name"
                    type="text"
                    value={formulario.name} 
                    onChange={handleChange}  
                    required     
                />
                {errors.name && 
                    <ErrorMessage 
                        error={errors.name} 
                    />
                }
                <Input 
                    label="Apellido:"
                    name="lastname"
                    type="text"
                    value={formulario.lastname}  
                    onChange={handleChange}    
                    required  
                />
                {errors.lastname && 
                    <ErrorMessage 
                        error={errors.lastname} 
                    /> 
                }
                <Input 
                    label="Email:"
                    name="email"
                    type="text"
                    value={formulario.email}  
                    onChange={handleChange} 
                    required     
                />
                {errors.email && 
                    <ErrorMessage 
                        error={errors.email} 
                    />
                }
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
                <button className="button" type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Login