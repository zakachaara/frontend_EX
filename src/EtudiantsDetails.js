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
                const etudiantResponse = await axios.get(`http://localhost:8080/students/${id}`);
                setEtudiant(etudiantResponse.data);

                const notesResponse = await axios.get(`http://localhost:8080/students/${id}/grades`);
                setNotes(notesResponse.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails :", error);
            }
        };
        fetchDetails();
    }, [id]);

    return (
        <div>
            <h1>Détails de l'Étudiant : {etudiant.name}</h1>
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
                            
                        >
                            <td>{note.nom_module}</td>
                            <td style={{
                                backgroundColor: note.note > 10 ? "green" : "red",
                                color: "white",
                            }} >{note.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="AddStudent">
                <Link to={`/etudiants/${id}/add-note`}>Ajouter une Note</Link>
            </div>
        </div>
    );
};

export default EtudiantDetails;
