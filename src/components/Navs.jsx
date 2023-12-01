const Navs = ({ href, titulo }) => {

    return (
        <a className="nav-link active" aria-current="page" href={href}> 
            {titulo} 
        </a> 
    )

}

export default Navs