import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth.jsx"

const ProtectedRoute = ({ children }) => {

    const { isAuthenticated } = useAuth()
    const location = useLocation()

    if(!isAuthenticated) {
        return <Navigate to={'/login'} state={{ location }} />
    }

    return children
}

export default ProtectedRoute