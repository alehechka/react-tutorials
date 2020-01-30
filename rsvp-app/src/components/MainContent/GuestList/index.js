import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = ({ guests, toggleConfirmation, toggleEditing, setName, isFiltered, removeGuest, pendingGuest }) => {
    return (
        <ul>
        <PendingGuest name={pendingGuest}/>
            {guests
            .filter(guest => !isFiltered || guest.isConfirmed)
            .map((guest, index) =>
                <Guest 
                    key={index} 
                    name={guest.name} 
                    isConfirmed={guest.isConfirmed}
                    isEditing={guest.isEditing}
                    handleConfirmation={() => toggleConfirmation(guest.id)}
                    handleToggleEditing={() => toggleEditing(guest.id)}
                    setName={text => setName(text, guest.id)}
                    removeGuest={() => removeGuest(guest.id)}
                />
            )}
        </ul>
    );
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuest: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}


export default GuestList;