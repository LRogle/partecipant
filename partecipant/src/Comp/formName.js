import React from 'react'

function FormName() {
    return (
        <form>
            <div className='FormName'>
                <h2>Add to the list</h2>
                    <label htmlFor='name'>Enter Partecipant:</label>
                    <input type="text" name="name"/>
                    <input type="button" value="Add"></input>
            </div>
            {/* <div className='FormName'>
                <input type="button" value="Add"></input>
            </div> */}
        </form>
    )
}

export default FormName;
   