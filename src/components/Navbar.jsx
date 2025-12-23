import { NavLink } from "react-router-dom";

const navStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    marginLeft: "12px",
    textDecoration: "none",
    });

    export default function Navbar() {
    return (
        <header className="navbar">
        <nav className="navbar-inner">
            <NavLink to="/" end style={navStyle}>
            דף הבית
            </NavLink>

            <NavLink to="/about" style={navStyle}>
            אודות
            </NavLink>

            <NavLink to="/characters" style={navStyle}>
            דמויות
            </NavLink>
        </nav>
        </header>
    );
}
