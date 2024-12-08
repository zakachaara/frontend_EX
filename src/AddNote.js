import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nomDuCours: "",
        valeurDeNote: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/students/${id}/grades/`, {
                ...formData,
                idEtudiant: id,
            });
            navigate(`/students/${id}`);
        } catch (error) {
            console.error("Erreur lors de l'ajout de la note :", error);
        }
    };

    return (
        <div>
            <h1>Ajouter une Note</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom du Cours :</label>
                    <input
                        type="text"
                        name="nomDuCours"
                        value={formData.nomDuCours}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Valeur de la Note :</label>
                    <input
                        type="number"
                        name="valeurDeNote"
                        value={formData.valeurDeNote}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddNote;
