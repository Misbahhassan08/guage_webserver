import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>IOT Dashboard</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#1e1e2f",
    color: "#ffffff",
    textAlign: "center",
    position: "fixed", // Fix header to the top
    top: 0,
    left: 0,
    width: "100%", // Full width
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    zIndex: 1000, // Ensure it stays on top
  },
  title: {
    margin: 0,
    fontSize: "1.8rem",
  },
};

export default Header;
