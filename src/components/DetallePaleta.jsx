import { useParams } from "react-router-dom"

const DetallePaleta = () => {

    const { paleta_id } = useParams()

    return (
        <div>
            <h1>{paleta_id}</h1>
        </div>
    )
}

export default DetallePaleta