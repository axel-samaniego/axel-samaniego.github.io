import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{
      backgroundColor: "#ffccd5",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Link to="/connections-game/" style={{
        fontSize: "24px",
        fontWeight: "bold",
        textDecoration: "none",
        color: "black",
        backgroundColor: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
      }}>
        Enter
      </Link>
    </div>
  );
}
