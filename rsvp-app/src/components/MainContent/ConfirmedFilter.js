import React from 'react';

const ConfirmedFilter = (props) => {
    return (
        <div>
            <h2>Invitees</h2>
            <label>
                <input
                    type="checkbox"
                    checked={props.isFiltered}
                    onChange={props.toggleFilter} />
                Hide those who haven't responded
          </label>
        </div>
    );
}

export default ConfirmedFilter;