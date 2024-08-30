// App.js
import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './styles/Header.css'; // Archivo de estilos generales.

function App() {
    return (
        <div className="App">
            <Header />
            <Form />
        </div>
    );
}

export default App;