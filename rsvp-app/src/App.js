import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Donnie',
        isConfirmed: false,
        isEditing: false,
        id: 1
      },
      {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false,
        id: 2
      },
      {
        name: 'Adam',
        isConfirmed: true,
        isEditing: false,
        id: 3
      }
    ]
  }

  currentID = 4;

  toggleGuestProperty = (property, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  }

  toggleConfirmation = (id) => {
    this.toggleGuestProperty("isConfirmed", id);
  }

  toggleEditing = (id) => {
    this.toggleGuestProperty("isEditing", id);
  }

  setName = (name, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  }

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    })
  }

  handleNameInput = (name) => {
    this.setState(prevState => {
      return {
        guests: [
          {
            name,
            isConfirmed: false,
            isEditing: false,
            id: this.currentID += 1
          },
          ...prevState.guests
        ],
        pendingGuest: ""
      }
    });
  }
  handlePendingNameChange = (name) => {
    this.setState({ pendingGuest: name });
  }

  handleRemoveGuest = (id) => {
    this.setState(prevState => {
      return {
        guests: prevState.guests.filter(g => g.id !== id)
      };
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => this.state.guests.reduce((total, guest) => {
    return guest.isConfirmed ? total + 1 : total;
  }, 0);

  render() {
    const totalInvited = this.getTotalInvited();
    const totalAttending = this.getAttendingGuests();
    const totalUnconfirmed = totalInvited - totalAttending;
    return (
      <div className="App">
        <Header
          handleNameInput={this.handleNameInput}
          handlePendingNameChange={this.handlePendingNameChange} />
        <MainContent
          totalInvited={totalInvited}
          totalAttending={totalAttending}
          totalUnconfirmed={totalUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          isFiltered={this.state.isFiltered}
          handleRemoveGuest={this.handleRemoveGuest}
          pendingGuest={this.state.pendingGuest}
          toggleFilter={this.toggleFilter}
        />
      </div>
    );
  }
}

export default App;
