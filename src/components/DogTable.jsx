import React, { useState, useEffect } from "react";

function DogTable() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    })

    function ShowDogTable(data) {
        return (
            <div className="table-container">
                <table className="table-display">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Age</th>
                            <th>Owner Name</th>
                            <th>Owner Contact</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr id="table-elements" key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.breed}</td>
                                    <td>{val.age}</td>
                                    <td>{val.owner_name}</td>
                                    <td>{val.owner_contact}</td>
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
            {data ? ShowDogTable(data) : <h2 className="loading-header">Loading...</h2>}
        </>
    )
}

export default DogTable;