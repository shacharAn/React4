import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navbar">
        <nav className="navbar-inner">
            
            <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                fontWeight: isActive ? "bold" : "normal",
                marginLeft: "12px",
                textDecoration: "none"
            })}
            >
            דף הבית
            </NavLink>
            
            <NavLink
            to="/about"
            style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                fontWeight: isActive ? "bold" : "normal",
                marginLeft: "12px",
                textDecoration: "none"
            })}
            >
            אודות
            </NavLink>

            <NavLink
            to="/characters"
            style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                fontWeight: isActive ? "bold" : "normal",
                marginLeft: "12px",
                textDecoration: "none"
            })}
            >
            דמויות
            </NavLink>
            
        </nav>
        </header>
    );
}
