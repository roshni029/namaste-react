import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

// SPA - Single Page Application???
// Client Side Routing

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isOnline = useIsOnline()
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <Link to="/instamart">
          <li>InstaMart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "You are online" : "You are Offline"}</h1>
      {isLoggedIn ?
    (<button onClick={()=> setIsLoggedIn(false)} >Logout</button>) :
    (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
    </div>
  );
};

export default Header;
