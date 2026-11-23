function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e293b",
    color: "white",
    padding: "15px 30px"
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold"
  };

  const menuStyle = {
    display: "flex",
    gap: "20px"
  };

  const linkStyle = {
    cursor: "pointer"
  };

  return (
    <div style={navStyle}>
      <div style={logoStyle}>MyApp</div>

      <div style={menuStyle}>
        <span style={linkStyle}>Home</span>
        <span style={linkStyle}>Cards</span>
        <span style={linkStyle}>Contact</span>
      </div>
    </div>
  );
}

export default Navbar;