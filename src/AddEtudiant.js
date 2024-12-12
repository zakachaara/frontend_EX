import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEtudiant = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/students/`, {
                ...formData,
                idEtudiant: id,
            });
            
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de l'ajout de la note :", error);
        }
    };

    return (
        <div >
            <h1>Ajouter un Etudiant</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom de l'Etudiant :</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
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

export default AddEtudiant;
