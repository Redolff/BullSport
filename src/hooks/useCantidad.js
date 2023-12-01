import { useState } from "react"

const useCantidad = (inicial) => {
    const [cantidad, setCantidad] = useState(inicial);
    
    const incrementar = () => {
        setCantidad(cantidad + 1);
    }

    const disminuir = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    return [cantidad, incrementar, disminuir]
}

export default useCantidad