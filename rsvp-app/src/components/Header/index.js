import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from './GuestInputForm';

const Header = ({ handleNameInput, handlePendingNameChange }) => {

    return (
        <header>
            <h1>RSVP</h1>
            <p>A Treehouse App</p>
            <GuestInputForm handleNameInput={handleNameInput} handlePendingNameChange={handlePendingNameChange} />
        </header>
    );
}

Header.propTypes = {
    handleNameInput: PropTypes.func.isRequired,
    handlePendingNameChange: PropTypes.func.isRequired
}

export default Header;