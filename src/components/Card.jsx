const Card = ({ id, img, name, price, description }) => {

    return (
        <div className='card'>   
            <ul key={id}>
                <img alt="img" src={img} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <h5> ${price} </h5>
                    <p className="card-text"> {description} </p>
                </div>
            </ul>     
        </div>
    )
}

export default Card