import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({totalInvited, totalAttending, totalUnconfirmed}) => { 
    return (
        <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>{totalAttending}</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>{totalUnconfirmed}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{totalInvited}</td>
              </tr>
            </tbody>
          </table>
    );
}

Counter.propTypes = {
    totalInvited: PropTypes.number,
    totalAttending: PropTypes.number,
    totalUnconfirmed: PropTypes.number
}

export default Counter;