import { useEffect, useState } from 'react';

function Changelog() {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/paruthepro/schedule1-fansite/main/changelog.json')
      .then((res) => res.json())
      .then((data) => setLogData(data))
      .catch((err) => console.error('Failed to load changelog:', err));
  }, []);

  return (
    <div className="page changelog-page">
      <h1>Changelog</h1>
      <p>See what's new in Schedule I Fan Site.</p>

      <div className="changelog-list">
        {logData.map((entry, index) => (
          <div className="changelog-entry" key={index}>
            <h2>v{entry.version} <span className="date">({entry.date})</span></h2>

            {entry.additions && (
              <div className="change-group additions">
                <h3>➕ Additions</h3>
                <ul>
                  {entry.additions.map((change, i) => <li key={i}>{change}</li>)}
                </ul>
              </div>
            )}

            {entry.tweaks && (
              <div className="change-group tweaks">
                <h3>🛠 Tweaks</h3>
                <ul>
                  {entry.tweaks.map((change, i) => <li key={i}>{change}</li>)}
                </ul>
              </div>
            )}

            {entry.fixes && (
              <div className="change-group fixes">
                <h3>🐛 Fixes</h3>
                <ul>
                  {entry.fixes.map((change, i) => <li key={i}>{change}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Changelog;
