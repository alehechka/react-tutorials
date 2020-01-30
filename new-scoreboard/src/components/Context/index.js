import React from 'react';

export const ScoreboardContext = React.createContext();

export class Provider extends React.Component {

    state = {
        players: [
            {
                name: "Adam",
                id: 1,
                score: 0,
            },
            {
                name: "Treasure",
                id: 2,
                score: 0
            },
            {
                name: "Ashley",
                id: 3,
                score: 0
            },
            {
                name: "James",
                id: 4,
                score: 0
            }
        ]
    };

    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    getHighScore = () => {
        const scores = this.state.players.map(p => p.score);
        const highScore = Math.max(...scores);
        if (highScore) {
            return highScore;
        }
        return null;
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            };
        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    render() {
        return (
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                    changeScore: this.handleScoreChange
                }
            }}> 
                {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}

export const Consumer = ScoreboardContext.Consumer;