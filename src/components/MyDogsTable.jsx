import React, { useState, useEffect } from "react";

function MyDogsTable(properties) {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    }, [])

    const myDogs = []
    for (let i in data) {
        if (data[i]["owner_ID"] === properties.id) {
            myDogs.push(data[i])
        }
    }

    function ShowDogTable() {
        return (
            <div className="table-container">
                <table className="table-display">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Age</th>
                        </tr>
                        {myDogs.map((val, key) => {
                            return (
                                <tr id="table-elements" key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.breed}</td>
                                    <td>{val.age}</td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </div>
        )
    }

    return (
        <>
            {myDogs ? ShowDogTable() : <h2 className="loading-header">Loading...</h2>}
        </>
    )
}

export default MyDogsTable;