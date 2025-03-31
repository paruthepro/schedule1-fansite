import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPills, faFlask } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <div className="overlay" />

      <div className="content">
        <h1>Welcome to the Schedule I Fan Site</h1>
        <p>
          Dive into the chaotic world of drugs, deals, and neon-fueled empire building.
          This is your unofficial hub for Schedule I news, guides, and community content.
        </p>

        <div className="icon-row">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <FontAwesomeIcon icon={faLeaf} className="drug-icon" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.7 }}>
            <FontAwesomeIcon icon={faPills} className="drug-icon" />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
            <FontAwesomeIcon icon={faFlask} className="drug-icon" />
          </motion.div>
        </div>

        <Link to="/game-info" className="start-btn">Start Exploring</Link>
      </div>
    </div>
  );
}

export default Home;
