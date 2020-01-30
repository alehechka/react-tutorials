import React from 'react';
import '../App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends React.Component {

  state = {
    players: [
      {
        name: 'Adam',
        score: 0,
        id: 1
      },
      {
        name: 'Zach',
        score: 0,
        id: 2
      },
      {
        name: 'Cronch',
        score: 0,
        id: 3
      },
      {
        name: 'Donnie',
        score: 0,
        id: 4
      },
    ]
  };

  prevPlayerId = 4;

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if(highScore > 0)
      return highScore;
    else
      return null;
  }

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      state: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: prevState.players.concat({name, score: 0, id: this.prevPlayerId += 1}) 
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

    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id}
            index={index}
            isHighScore={player.score === highScore}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
