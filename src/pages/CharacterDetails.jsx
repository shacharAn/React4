import { useParams, Link } from "react-router-dom";
import { characters } from "../data";

export default function CharacterDetails() {
    const { id } = useParams();
    const numericId = Number(id);

    const character = characters.find((c) => c.id === numericId);

    if (!character) {
        return (
        <section className="card">
            <h1 className="page-title">דמות לא נמצאה</h1>

            <div className="notfound-actions">
            <Link className="nav-back-btn" to="/characters">
                חזרה לרשימת הדמויות
            </Link>
            </div>
        </section>
        );
    }

    const textColor = character.side === "Dark" ? "red" : "blue";

    return (
        <section className="card">
        <div style={{ color: textColor }}>
            <h1 className="page-title">{character.name}</h1>

            <p className="kv">
            <b>תפקיד:</b> {character.role}
            </p>

            <p className="kv">
            <b>מזהה דמות:</b> {character.id}
            </p>
        </div>

        <div className="notfound-actions">
            <Link to="/characters">
            חזרה לרשימת הדמויות
            </Link>
        </div>
        </section>
    );
}
