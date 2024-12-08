import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Etudiants = () => {
    const [etudiants, setEtudiants] = useState([]);

    useEffect(() => {
        const fetchEtudiants = async () => {
            try {
                const response = await axios.get("http://localhost:8080/students/");
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
                            <td><Link to={`/etudiants/${etudiant.id}`}> {etudiant.name} </Link></td>
                            <td>{new Date(etudiant.creationDate).toLocaleString()}</td>
                            <td>
                                {etudiant.meanGrade}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to={`/etudiants/add-etudiant`}>Ajouter un Etudiant</Link>
        </div>
    );
};

export default Etudiants;
