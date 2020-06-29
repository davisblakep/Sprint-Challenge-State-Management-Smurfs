import React, { useState } from 'react';
import { connect } from 'react-redux';


const SmurfForm = (props) => {

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now(),
    })


const inputChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
}

const onSubmit = (e) => {
    e.preventDefault();
    setFormState({
        name: '',
        age: '',
        height: ''
    })
}

return(
    <div>
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: "column", justify: "center"}}>
            <label>
                Name:
                <input 
                autoFocushtmlFor="name"
                type="text"
                name="name"
                value={formState.name}
                id="name"
                onChange={inputChange}
                />
            </label>
            <label>
                    Age:
                <input 
                htmlFor="age"
                type="text"
                name="age"
                value={formState.age}
                id="age"
                onChange={inputChange}
                />
                </label>
                <label>
                    Height:
                <input 
                htmlFor="height"
                type="text"
                name="height"
                value={formState.height}
                id="height"
                onChange={inputChange}
                />
                </label>
                <div>
                <button type='submit'>Add Smurf</button>
                </div>
        </form>
    </div>
)
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps, {})(SmurfForm);
