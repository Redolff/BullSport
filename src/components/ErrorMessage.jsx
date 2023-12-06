import '../style/form.css'

const ErrorMessage = ({ error }) => {

    return (
        <p className="errorMessage">
            {error}
        </p>
    )
}

export default ErrorMessage