import { useEffect, useState } from 'react';

function Changelog() {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/paruthepro/schedule1-fansite/main/changelog.json') // Replace with actual URL
      .then((res) => res.json())
      .then((data) => setLogData(data))
      .catch((err) => console.error('Failed to load changelog:', err));
  }, []);

  return (
    <div className="page changelog-page">
      <h1>Changelog</h1>
      <p>See what's new in Schedule 1.</p>

      <div className="changelog-list">
        {logData.map((entry, index) => (
          <div className="changelog-entry" key={index}>
            <h2>v{entry.version} <span className="date">({entry.date})</span></h2>
            <ul>
              {entry.changes.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Changelog;
