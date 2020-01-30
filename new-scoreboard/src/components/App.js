import React, { Component } from 'react';
import { Provider } from './components/context';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider>
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          {this.state.players.map((player, index) =>
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              isHighScore={highScore === player.score}
              removePlayer={this.handleRemovePlayer}
            />
          )}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
