import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ( {title, players} ) => {
    return(
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.array
};

Header.defaultProps = {
    title: 'Scoreboard'
}

export default Header;