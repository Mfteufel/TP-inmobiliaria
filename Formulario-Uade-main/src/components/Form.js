// components/Form.js
import React from 'react';
import '../styles/Form.css'; // Asegúrate de que este archivo existe en la carpeta styles

const Form = () => {
    return (
        <div className="form-page">
            <header className="header">
                <h1>Inscripción a Materias - UADE</h1>
            </header>
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="alumno">Alumno:</label>
                        <input 
                            type="text" 
                            id="alumno" 
                            name="alumno" 
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="legajo">Legajo:</label>
                        <input
                            type="number"
                            id="legajo"
                            name="legajo"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nivelAcademico">Nivel Académico:</label>
                        <input 
                            type="text" 
                            id="nivelAcademico" 
                            name="nivelAcademico" 
                            defaultValue="GRADO" 
                            readOnly 
                        />
                    </div>
                    
                    <div  className="form-group">
                        <label htmlFor="nombre">Sedes:</label>
                        <select id="sede" name="sede">
                            <option value="Monserrat">Monserrat</option>
                            <option value="Recoleta">Recoleta</option>
                            <option value="Belgrano">Belgrano</option>
                            <option value="Pinamar">Pinamar</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="turno">Turno:</label>
                        <select id="turno" name="turno">
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="manana">Mañana</option>
                            <option value="tarde">Tarde</option>
                            <option value="noche">Noche</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="carrera">Carrera:</label>
                        <input 
                            type="text" 
                            id="carrera" 
                            name="carrera" 
                            defaultValue="Ingeniería" 
                            readOnly 
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
