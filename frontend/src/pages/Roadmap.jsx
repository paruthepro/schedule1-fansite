function Roadmap() {
  return (
    <div className="page roadmap-page">
      <h1>Schedule I Roadmap</h1>
      <p>Track upcoming features, fixes, and future plans for the game.</p>

      <div className="trello-wrapper">
        <iframe
          src="https://trello.com/b/VQQpru3F.html"
          title="Schedule I Trello Roadmap"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 0 12px #1db954',
          }}
        />
      </div>
    </div>
  );
}

export default Roadmap;