import { useState } from "react"


const PetForm = ({pets, postPet}) => {

    const [statePet, setStatePet] = useState(
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let clonedPet = {...statePet};
        clonedPet[propertyName] = event.target.value;
        setStatePet(clonedPet);
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPet(statePet);
        setStatePet({
            name: "",
            type: "",
            breed: "",
            age: 0
        })
    }

    const petOptions = pets.map((pet) => {
        return <option pet={pet.id} value={pet.id}> {pet.name}  </option>
    })

    return(
        <form id="pet-form" onSubmit={handleFormSubmit}>
            <h3>Add a new pet</h3>

            <label htmlFor="pet-name">Pet Name:</label>
            <input
                id="pet-name"
                name="name"
                type="text"
                placeholder="enter pet name"
                onChange={handleChange}
                value={statePet.name}
            />
            <label htmlFor="pet-type">Pet Type:</label>
            <input
                id="pet-type"
                name="petType"
                type="text"
                placeholder="enter pet type"
                onChange={handleChange}
                value={statePet.type}
            />
            <label htmlFor="pet-breed">Pet Breed:</label>
            <input
                id="pet-breed"
                name="petBreed"
                type="text"
                placeholder="enter pet breed"
                onChange={handleChange}
                value={statePet.breed}
            />
            <label htmlFor="pet-age">Pet Age:</label>
            <input
                id="pet-age"
                name="petAge"
                type="number"
                min={1}
                max={100}
                onChange={handleChange}
                value={statePet.age}
            />
            <label htmlFor="pet">Pet</label>
            <select
                id="pet"
                name="petId"
                defaultValue="select-pet"
                onChange={handleChange}
            >
                <option disabled-value="select-pet">Choose an pet</option>
                {petOptions}
            </select>
            <input type="submit" value="Add Pet"/>
        </form>
    )
}

export default PetForm;