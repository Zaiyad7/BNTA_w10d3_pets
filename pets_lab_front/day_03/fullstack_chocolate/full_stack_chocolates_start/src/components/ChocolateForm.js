import { useState } from "react";

const ChocolateForm = ({estates, postChocolate}) => {

    const [stateChocolate, setStateChocolate] = useState(
        {
            name: "",
            cocoaPercentage: 0,
            estateId: null
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let clonedChocolate = {...stateChocolate};
        clonedChocolate[propertyName] = event.target.value;
        setStateChocolate(clonedChocolate);
        // console.log(event);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postChocolate(stateChocolate);
        setStateChocolate({
            name: "",
            cocoaPercentage: 0,
            estateId: null
        })
    } 

    const estateOptions = estates.map((estate) => {
        return <option key={estate.id} value={estate.id}> {estate.name} </option>
    })

    return(
        <form id="chocolate-form" onSubmit={handleFormSubmit}>
            <h3>Add a new chocolate</h3>

            <label htmlFor="chocolate-name">Chocolate Name:</label>
            <input
                id="chocolate-name"
                name="name"
                type="text"
                placeholder="enter chocolate name" 
                onChange={handleChange}
                value={stateChocolate.name}
            />

            <label htmlFor="cocoa-percentage">Cocoa Percentage:</label>
            <input
                id="cocoa-percentage"
                name="cocoaPercentage"
                type="number"
                min={1}
                max={100}
                onChange={handleChange}
                value={stateChocolate.cocoaPercentage}
            />

            <label htmlFor="estate">Estate</label>
            <select 
                id="estate" 
                name="estateId"
                defaultValue="select-estate"
                onChange={handleChange}
            >
                <option disabled-value="select-estate">Choose an estate</option>
                {estateOptions}
            </select>

            <input type="submit" value="Add Chocolate"/>          
        </form>
    )

}

export default ChocolateForm;