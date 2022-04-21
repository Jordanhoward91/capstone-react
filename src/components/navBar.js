import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="navbar">
			<Link to="/">Swapi</Link>
			<Link to="/">Counter</Link>
			<Link to="/">Hide Me</Link>
			<Link to="/">Font Size</Link>
		</div>
  );
}
