import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>_Dale's First React Project</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#01177a",
            borderRadius: "8px",
          }}
        >
          Add a New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
