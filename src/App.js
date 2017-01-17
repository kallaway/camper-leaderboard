import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>FreeCodeCamp Leaderboard</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

		<Leaderboard />
      </div>
    );
  }
}

class Leaderboard extends Component {
	constructor(props) {
		super(props);

	}
	// on load, get the information

	// get the info on all the campers



	render() {

		// var campers = this.props.data.map(function(camper) {
		// 	return <Camper />;
		// });
		// {campers}
		return <table>
			<tr>
				<td>Leaderboard</td>
			</tr>
			<tr></tr>

		</table>
	}
}

class Camper extends Component {
	render() {
		return <tr>
			<td className="number"></td>
			<td className="name"></td>
			<td className="points30"></td>
			<td className="pointsAll"></td>
		</tr>
	}
}

export default App;
