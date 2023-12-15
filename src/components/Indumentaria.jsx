import Card from './Card'
import '../style/indumentaria.css'

const Indumentaria = () => {

    const remeras = [
        {
            id: 1,
            img: 'imagen1',
            name: 'Remera Bull-Padel',
            price: '35999',
            description: 'Remera de tela con logo Bull padel, ideal para jugar'
        },
        {
            id: 2,
            img: 'imagen2',
            name: 'Remera Bull-Padel A1',
            price: '26500',
            description: 'Chomba con logo Bull padel, con agujeros de aire'
        },
        {
            id: 3,
            img: 'imagen3',
            name: 'Remera Bull-Padel A7',
            price: '26500',
            description: 'Chomba con logo Bull padel, con agujeros de aire'
        },
        {
            id: 4,
            img: 'imagen3',
            name: 'Remera Bull-Padel A7',
            price: '26500',
            description: 'Chomba con logo Bull padel, con agujeros de aire'
        },
    ]

    return (
        <div className="indumentaria">
            <h1>Remeras</h1>
            <div className='container text-center'>
                <div className='row'>
                    {remeras.map((x) => (
                        <div className='col-sm' key={x.id}>
                            <Card  
                                id={x.id} 
                                img={x.img}
                                name={x.name}
                                price={x.price}
                                description={x.description}
                            /> 
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Indumentaria