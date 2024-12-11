import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nom_module: "",
        note: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://studnet-backend:8080/students/${id}/grades`, {
                ...formData,
                idEtudiant: id,
            });
            navigate(`/etudiants/${id}`);
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
                        name="nom_module"
                        value={formData.nom_module}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <div>
                    <label>Valeur de la Note :</label>
                    <input
                        type="number"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br></br>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddNote;
