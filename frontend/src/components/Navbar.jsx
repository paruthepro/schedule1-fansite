import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Schedule I</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game-info">Game Info</Link></li>
        <li><Link to="/changelog">Changelog</Link></li>
        <li><Link to="/roadmap">Roadmap</Link></li>
        <li>
          <a href="https://store.steampowered.com/app/3164500/Schedule_I/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSteam} /> Steam
          </a>
        </li>
        <li>
          <a href="https://discord.gg/schedule-one" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
