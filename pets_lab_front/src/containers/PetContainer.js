import { useState, useEffect } from "react";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";


const PetContainer = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets")
        const data = await response.json();
        setPets(data);
    }

    useEffect(() => {
        fetchPets();
    }, [])

    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets([...pets, savedPet]);
    }

    return(
        <>
            <PetForm pets={pets} postPet={postPet}/>

        </>
    )
}

export default PetContainer;