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
		this.state = { dataReceived: [] };
		// this.props.data.dataReceived = [];
	}
	// on load, get the information
	//state.dataReceived = [];

	// getInitialState() {
	// 	return {
	// 		dataReceived: []
	// 	}
	// }

	componentDidMount() {
		var _this = this;
		this.serverRequest = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function(result) {
			_this.setState({
				dataReceived: result.data
			});
		});
		// getData();
		//this.props.dataReceived = axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
		//console.log(axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime'));
	}

	componentWillUnmount() {
		this.serverRequest.abort();
	}


	render() {
		// var campers = this.props.data.map(function(camper) {
		// 	return <Camper />;
		// });
		// {campers}
		return <table className="Leaderboard">
			<tr>
				<td>Leaderboard</td>
			</tr>
			<tr>
				{this.state.dataReceived.map(function(camper) {
					return (
						<tr className="Camper">
							<td>Username: {camper.username}</td>
							<td>Img: <img className="camper-photo" src={camper.img} /></td>
							<td>Alltime: {camper.alltime}</td>
							<td>Recent: {camper.recent}</td>
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
