import { Component } from "react/cjs/react.production.min";

import Swapi from "./swapi";
import Counter from "./counter";
import ShowHide from "./showHide";
import FontSizer from "./fontSize";


class Home extends Component{
	render(){
		return(
			<div className="home">
				<h1>Welcome to your Home page</h1>
				<Swapi />
				<Counter />
				<ShowHide />
				<FontSizer />
			</div>
		);
	}
}

export default Home;