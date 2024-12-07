import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Etudiants from "./Etudiants.js";
import EtudiantDetails from "./EtudiantsDetails.js";
import AddNote from "./AddNote.js";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Etudiants />} />
                    <Route path="/etudiants/:id" element={<EtudiantDetails />} />
                    <Route path="/etudiants/:id/add-note" element={<AddNote />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
