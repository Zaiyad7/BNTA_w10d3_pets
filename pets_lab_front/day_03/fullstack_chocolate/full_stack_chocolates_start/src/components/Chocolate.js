const Chocolate = ({chocolate, deleteChocolate}) => {
     /* can remove this handleDeleteClick if using the alt way */
    const handleDeleteClick = () => {
        deleteChocolate(chocolate.id)
    }
       
    return(
        <div className="chocolate">
            <h4>{chocolate.name}</h4>
            <p>Estate: {chocolate.estate.name}</p>
            <p>Cocoa %: {chocolate.cocoaPercentage}</p>
            <button onClick={handleDeleteClick}>Delete</button>
            {/* <button onClick={ () => deleteChocolate(chocolate.id)}>Delete</button> 
            alternative way of doing it */}
        </div>
    )

}

export default Chocolate;