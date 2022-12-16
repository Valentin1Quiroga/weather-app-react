const Card = ({nombre,temperatura,clima,imagen}) => {
    
    return (
        <div className="card mt-3 text-center test" >
            <img src={imagen} alt="" />
            <div className="card-body text-light">
            <h4 className="card-title fw-bold">{nombre} </h4>
            <p className="card-text"> {clima} </p>
            <h3>{temperatura}</h3>
            </div>
        </div>            
    );
}
 
export default Card;