import React, { useState, useEffect } from "react";

function DogTable() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("https://v5h2cy3d68.execute-api.eu-west-2.amazonaws.com/beta/dogs", {method: "GET"})
        .then((response) => response.json())
        .then(json => setData(json["body"])) 
        .catch(error => console.error(error))
    }, [])

    function ShowDogTable(data) {
        return (
            <div className="table-container">
                <table className="table-display">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Date of birth</th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr id="table-elements" key={key}>
                                    <td>{val.Name}</td>
                                    <td>{val.Breed}</td>
                                    <td>{val.DateOfBirth}</td>
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