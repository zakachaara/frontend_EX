import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EtudiantDetails = () => {
    const { id } = useParams();
    const [etudiant, setEtudiant] = useState({});
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const etudiantResponse = await axios.get(`http://localhost:8080/etudiants/${id}`);
                setEtudiant(etudiantResponse.data);

                const notesResponse = await axios.get(`http://localhost:8080/etudiants/${id}/notes`);
                setNotes(notesResponse.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails :", error);
            }
        };
        fetchDetails();
    }, [id]);

    return (
        <div>
            <h1>Détails de l'Étudiant : {etudiant.nom}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nom du Cours</th>
                        <th>Valeur de la Note</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note) => (
                        <tr
                            key={note.id}
                            style={{
                                backgroundColor: note.valeurDeNote > 10 ? "green" : "red",
                                color: "white",
                            }}
                        >
                            <td>{note.nomDuCours}</td>
                            <td>{note.valeurDeNote}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/etudiants/${id}/add-note`}>Ajouter une Note</Link>
        </div>
    );
};

export default EtudiantDetails;