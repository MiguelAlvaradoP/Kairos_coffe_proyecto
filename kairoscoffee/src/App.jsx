import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import Home from './pages/Home';
import Register from './pages/Register';
import Productos from './pages/ProductosPage';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registro" element={<Register />} />
                    <Route path="/productos" element={<Productos />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
