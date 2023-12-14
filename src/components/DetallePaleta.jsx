import { useParams } from "react-router-dom"

const DetallePaleta = () => {

    const { paleta_id } = useParams()

    console.log(paleta_id)

    return (
        <div>
            <h1>{paleta_id}</h1>
        </div>
    )
}

export default DetallePaleta