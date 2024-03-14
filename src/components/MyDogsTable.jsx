import React, { useState, useEffect } from "react";

function MyDogsTable(properties) {
    
    const myDogs = properties.id
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