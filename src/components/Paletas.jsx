import '../style/paletas.css'
import { Link } from 'react-router-dom'

const paleta = [
    {
        id: 1,
        title : 'bullpadel',
        price : '$5000',
    },
    {
        id: 2,
        title : 'bullpadel-2',
        price : '$5000',
    },
    {
        id: 3,
        title : 'bullpadel-3',
        price : '$5000',
    },
]

const Paletas = () => {

    return (
        <div className="paletas">
            <h1 className='title-paletas'>Paletas</h1>
            <ul>
                {paleta.map((x) => 
                    <li key={x.id}> <Link to={`/paletas/${x.id}`}> {x.title} </Link> </li>
                )}
            </ul>
        </div>
    )
}

export default Paletas