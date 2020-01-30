import React from 'react';
import PropTypes from 'prop-types';

const GuestName = ( {name, isEditing, handleNameEdits} ) => {
    if(isEditing) {
        return (
            <input type="text" value={name} onChange={handleNameEdits}/>
        );
    } else {
        return (
            <span>{name}</span>
        )
    }
}

GuestName.propTypes = {
    name: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
}

export default GuestName;