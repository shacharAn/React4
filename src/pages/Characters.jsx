import { Link } from "react-router-dom";
import { characters } from "../data";

export default function Characters() {
    return (
        <section className="card">
        <h1 className="page-title">רשימת דמויות</h1>
        <p className="page-subtitle">לחצי על שם דמות כדי לראות את עמוד הפרטים שלה.</p>

        <ul className="list">
            {characters.map((c) => (
            <li key={c.id} className="list-item">
                <Link to={`/characters/${c.id}`}>{c.name}</Link>
            </li>
            ))}
        </ul>
        </section>
    );
}
