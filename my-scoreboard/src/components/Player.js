import React from 'react';
import Counter from './Counter';
import Icon from './Icon';
import PropTypes from 'prop-types';

class Player extends React.PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        isHighScore: PropTypes.bool,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired
    }

    render() {
        const { name, id, score, index, isHighScore, removePlayer, changeScore } = this.props;
        return(
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon isHighScore={isHighScore} />
                    {name}
                </span>
                <Counter 
                    index={index}
                    score={score}
                    changeScore={changeScore}
                />
            </div>
        );
    };
}

export default Player;