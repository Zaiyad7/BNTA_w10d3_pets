import { useEffect, useState } from "react";
import ChocolateList from "../components/ChocolateList";
import ChocolateForm from "../components/ChocolateForm";

const ChocolateContainer = () => {

    const [chocolates, setChocolates] = useState([]);
    const [estates, setEstates] = useState([]);

    const fetchChocolates = async () => {
        const response = await fetch("http://localhost:8080/chocolates")
        const data = await response.json();
        // you can format data here - filter, removing unecessary values etc
        setChocolates(data);
    }
    const fetchEstates = async () => {
        const response = await fetch("http://localhost:8080/estates")
        const data = await response.json();
        // you can format data here - filter, removing unecessary values etc
        setEstates(data);
    }


    useEffect(() => {
        // check if user is logged in
        fetchChocolates();
        fetchEstates();
    }, [])

    const postChocolate = async (newChocolate) => {
        const response = await fetch("http://localhost:8080/chocolates", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newChocolate)
        })
        const savedChocolate = await response.json();
        setChocolates( [...chocolates, savedChocolate] );
    }

    const deleteChocolate = async (id) => {
        await fetch("http://localhost:8080/chocolates/" + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
        const keptChocolates = chocolates.filter((chocolate) => chocolate.id !== parseInt(id));
        setChocolates(keptChocolates);   
        
    }

    return(
        <>
            <ChocolateForm estates={estates} postChocolate={postChocolate}/>
            <ChocolateList chocolates={chocolates} deleteChocolate={deleteChocolate}/>
        </>
    )

}

export default ChocolateContainer;