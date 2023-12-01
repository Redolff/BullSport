import useCantidad from '../hooks/useCantidad'
import '../style/card.css'

const Card = () => {

    const [cantidad, incrementar, disminuir] = useCantidad(0)

    return (
        <div>        
            <button onClick={disminuir}>-</button>
            <h4>Cantidad: {cantidad}</h4>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Card