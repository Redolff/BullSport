import { useState } from "react"

const useFormulario = (inicial, validateForm) => {

    const [formulario, setFormulario] = useState(inicial)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        setErrors(validateForm(formulario))
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setFormulario(inicial)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(setErrors(validateForm(formulario))){
            //paso el formulario con exit
            console.log((values) => console.log(values))
            reset()
        }
        console.log('Formulario incorrecto o incompleto')
    }

    return [formulario, handleChange, errors, handleSubmit]

}

export default useFormulario