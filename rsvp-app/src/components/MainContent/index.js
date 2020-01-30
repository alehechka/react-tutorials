import React from 'react';
import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = (props) => {
    return (
        <div className="main">
            <ConfirmedFilter
                isFiltered={props.isFiltered}
                toggleFilter={props.toggleFilter} />
            <Counter
                totalInvited={props.totalInvited}
                totalAttending={props.totalAttending}
                totalUnconfirmed={props.totalUnconfirmed}
            />
            <GuestList
                guests={props.guests}
                toggleConfirmation={props.toggleConfirmation}
                toggleEditing={props.toggleEditing}
                setName={props.setName}
                isFiltered={props.isFiltered}
                removeGuest={props.handleRemoveGuest}
                pendingGuest={props.pendingGuest}
            />
        </div>
    );
}

export default MainContent;