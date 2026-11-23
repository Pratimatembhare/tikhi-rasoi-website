function ConditionalCards() {
  const cards = [
    { id: 1, name: "React", active: true },
    { id: 2, name: "JavaScript", active: false },
    { id: 3, name: "CSS", active: true }
  ];

  const container = {
    padding: "30px"
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px"
  };

  return (
    <div style={container}>
      <h2>Conditional Styling Cards</h2>

      <div style={grid}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              color: "white",
              backgroundColor: card.active ? "#16a34a" : "#dc2626",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            <h3>{card.name}</h3>
            <p>{card.active ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConditionalCards;