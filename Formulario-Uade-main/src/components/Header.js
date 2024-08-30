// components/Header.js
import React from 'react';
import '../styles/Header.css'; // Asegúrate de que este archivo existe en la carpeta styles

const Header = () => {
    return (
        <header className="header">
            <h1>Inscripción a Materias</h1>
            <p>Universidad Argentina de la Empresa (UADE)</p>
        </header>
    );
};

export default Header;