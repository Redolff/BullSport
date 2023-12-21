import FormRegistro from "./FormRegistro"

const Registro = ({ isAuthenticated, login, logout }) => {
    return (
        <div className="container">
            <FormRegistro 
                login={login}
                logout={logout}
            />
        </div>
    )
}

export default Registro