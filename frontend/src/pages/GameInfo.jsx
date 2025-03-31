import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPills, faFlask } from '@fortawesome/free-solid-svg-icons';
import Screenshot1 from '../assets/screenshots/screenshot_1.jpg'; // Add your own screenshots
import Screenshot2 from '../assets/screenshots/screenshot_2.jpg';
import Manufacture from '../assets/screenshots/manufacture.gif';
import Distribute from '../assets/screenshots/distribute.gif';
import Expand from '../assets/screenshots/expand.gif';
import Fight from '../assets/screenshots/fight.gif';
import Teamwork from '../assets/screenshots/teamwork.gif';

function GameInfo() {
  return (
    <div className="page game-info-page">
      <h1>About Schedule I</h1>
      <p>
      From small-time dope pusher to kingpin - manufacture and distribute a range of drugs throughout the grungy city of Hyland Point. Expand your empire with properties, businesses, employees and more.
      </p>
      <p>
      You're a small-time drug dealer rolling into a fresh town with no cash, no product and no connections. Build your drug empire from the ground up in the grungy west-coast city of Hyland Point. Contend against intensifying law enforcement and deadly cartel competitors to expand your empire and reach the peak of the underworld.
      </p>

      <h2>Mechanics</h2>
      <p>Produce a range of drugs to satisfy your customers, each one with it's own unique production process. 
        Discover special recipes to create new drug variants with special properties.</p>
      <img src={Manufacture} alt="Manufacture" />
      <p>Walk, skate or drive throughout Hyland Point to get product into the hands of customers. Hire dealers to handle distribution for you.</p>
      <img src={Distribute} alt="Distribute" />
      <p>Purchase new properties and hire employees to expand the scope and scale of your operations. 
        Work with suppliers to build a fully automated production and distribution chain.</p>
      <img src={Expand} alt="Expand" />
      <p>This is a dangerous line of work - you'll have to contend with increasing law enforcement, as well as deadly cartel competitors. 
        Fight with fists, melee weapons or firearms.</p>
      <img src={Fight} alt="Fight" />
      <p>A growing empire needs skilled management. Reach new heights in co-op multiplayer. </p>
      <img src={Teamwork} alt="Teamwork" />
      <div className="drug-info">
        <div className="drug">
          <FontAwesomeIcon icon={faLeaf} className="drug-icon" />
          <h3>Weed</h3>
          <p>Grow it, roll it, smoke it, sell it. Classic stoner biz.</p>
        </div>
        <div className="drug">
          <FontAwesomeIcon icon={faPills} className="drug-icon" />
          <h3>Cocaine</h3>
          <p>High risk, high reward. Refine and push to rich clients.</p>
        </div>
        <div className="drug">
          <FontAwesomeIcon icon={faFlask} className="drug-icon" />
          <h3>Meth</h3>
          <p>Cook it in labs. Dangerous, but extremely profitable.</p>
        </div>
      </div>

      <h2>Screenshots</h2>
      <div className="screenshot-gallery">
        <img src={Screenshot1} alt="Screenshot 1" />
        <img src={Screenshot2} alt="Screenshot 2" />
      </div>
    </div>
  );
}

export default GameInfo;
