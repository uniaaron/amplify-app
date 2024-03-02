import { useState } from "react"

function AddDogForm(properties) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [breed, setBreed] = useState("")

    function addDog() {
        var walkerRequestOptions = {
            method: "POST",
            body: JSON.stringify(
                {
                    "name": name,
                    "age": age,
                    "breed": breed,
                    "owner_name": properties.user["name"],
                    "owner_contact": properties.user["mobile"],
                    "owner_ID": properties.user["id"]
                }
            )
        }

        fetch(("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/dogs"), walkerRequestOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

        window.location.reload(true)
    }

    return (
        <>
            <h3>Add Dog</h3>
            <div>
                <label>Name:</label><br/>
                <input value={name} onChange={(e) => setName(e.target.value)}/><br/>
                <label>Breed:</label><br/>
                <input value={breed} onChange={(e) => setBreed(e.target.value)}/><br/>
                <label>Age:</label><br/>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)}/><br/>
                <button onClick={addDog}>Save Dog</button>
            </div>
        </>
    )
}
export default AddDogForm;