import React, { Component } from "react";


class Swapi extends Component {
  constructor() {
    super();

    this.state = {
      character: {}
    };
  }

	getPlanet() {
    fetch(this.state.character.homeworld)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          planet: data.result.properties.name
        })
      )
      .catch((err) => console.error("Get homeworld error: ", err));
  }

	componentDidMount() {
    fetch("https://www.swapi.tech/api/people/4")
      .then((res) => res.json())
      .then((data) => this.setState({ character: data.result.properties }))
      .catch((err) => console.error("Get Person Error: ", err));
  }

	render() {
		return (
			<div>
				<h1>SWAPI</h1>

				<h3>Name: {this.state.character.name}</h3>
				<h3>Mass: {this.state.character.mass}</h3>

				<button onClick={this.handlePlanetInfo}></button>
			</div>
		)
	}
}

export default Swapi;