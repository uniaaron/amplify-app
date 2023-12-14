function Availability() {
    const walkerAvailability = [false, false, false, false, false, false, false];
    
    const updateAvailability = (event) => {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        const dayChange = event.target.value

        walkerAvailability[days.indexOf(dayChange)] = event.target.checked
    }

    return (
        <fieldset className="checkbox-container">
            <legend>Availability</legend>
            <div>
                <input type="checkbox" id="monday" name="availability" value="Monday" onChange={updateAvailability}/>
                <label htmlFor="monday">Monday</label>
            </div>  
            <div>           
                <input type="checkbox" id="Tuesday" name="availability" value="Tuesday" onChange={updateAvailability}/>
                <label htmlFor="Tuesday">Tuesday</label>
            </div>
            <div>
                <input type="checkbox" id="wednesday" name="availability" value="Wednesday" onChange={updateAvailability}/>
                <label htmlFor="wednesday">Wednesday</label>
            </div>
            <div>
                <input type="checkbox" id="thursday" name="availability" value="Thursday" onChange={updateAvailability}/>
                <label htmlFor="thursday">Thursday</label>
            </div>
            <div>
                <input type="checkbox" id="friday" name="availability" value="Friday" onChange={updateAvailability}/>
                <label htmlFor="friday">Friday</label>
            </div>
            <div>
                <input type="checkbox" id="Saturday" name="availability" value="Saturday" onChange={updateAvailability}/>
                <label htmlFor="Saturday">Saturday</label>
            </div>
            <div>
                <input type="checkbox" id="Sunday" name="availability" value="Sunday" onChange={updateAvailability}/>
                <label htmlFor="Sunday">Sunday</label>
            </div>
        </fieldset>
    )
}

export default Availability;