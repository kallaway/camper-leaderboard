import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
	// getData: function() {
	// 	var days30 = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function(camper) {
	// 		this.props.data.days30 = {
	// 			username: camper.username,
	// 			img: camper.img,
	// 			alltime: camper.alltime,
	// 			recent: camper.recent,
	// 			lastUpdate: camper.lastUpdate
	// 		}
	// 	});
	// 	var allTime = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function(camper) {
	// 		this.props.data.allTime = {
	// 			username: camper.username,
	// 			img: camper.img,
	// 			alltime: camper.alltime,
	// 			recent: camper.recent,
	// 			lastUpdate: camper.lastUpdate
	// 		}
	// 	});;
	// }

	componentDidMount() {
		// getData();
		this.props.data.dataReceived = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
		console.log(axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime'));
	}


	render() {

		// var campers = this.props.data.map(function(camper) {
		// 	return <Camper />;
		// });
		// {campers}
		return <table>
			<tr>
				<td>Leaderboard</td>
			</tr>
			<tr>
				{this.props.data.dataReceived.map(function(camper) {
					return (
						<tr>
							<td>Username: {camper.username}</td>
							<td>Img: <img src={camper.img} /></td>
							<td>AllTime: {camper.allTime}</td>
						</tr>
					);
				})
				}
			</tr>

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
