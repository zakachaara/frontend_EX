import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Etudiants = () => {
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        const fetchEtudiants = async () => {
            try {
                const response = await axios.get("http://localhost:8080/etudiants");
                setEtudiants(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des étudiants :", error);
            }
        };
        fetchEtudiants();
    }, []);

    return (
        <div>
            <h1>Liste des Étudiants</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Date de Création</th>
                        <th>Détails</th>
                    </tr>
                </thead>
                <tbody>
                    {etudiants.map((etudiant) => (
                        <tr key={etudiant.id}>
                            <td>{etudiant.nom}</td>
                            <td>{new Date(etudiant.dateDeCreation).toLocaleDateString()}</td>
                            <td>
                                <Link to={`/etudiants/${etudiant.id}`}>Voir Détails</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Etudiants;
