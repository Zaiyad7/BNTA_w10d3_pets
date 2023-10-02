const Pet = ({pet}) => {


    return(

        <div className="pet">
            <h3>{pet.name}</h3>
            <p> Pet: {pet.name}</p>



        </div>
    )
}

export default Pet;