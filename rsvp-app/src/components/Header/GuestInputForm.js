import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = ({ handleNameInput, handlePendingNameChange }) => {

    let guestInput = React.createRef();
    let handleSubmit = (e) => {
        e.preventDefault();
        handleNameInput(guestInput.current.value);
        e.currentTarget.reset();
    }

    let handleChange = (e) => {
        handlePendingNameChange(guestInput.current.value);
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Invite Someone"
                ref={guestInput}
                onChange={handleChange}
            />
            <button type="submit" name="submit" >Submit</button>
        </form>
    );
}

GuestInputForm.propTypes = {
    handleNameInput: PropTypes.func.isRequired,
    handlePendingNameChange: PropTypes.func.isRequired
}

export default GuestInputForm;