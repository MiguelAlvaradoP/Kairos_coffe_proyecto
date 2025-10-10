import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import Profile from './components/auth/Profile';
import './styles/buttons.css';

const App = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="App" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h1>Bienvenido a Kairos</h1>

        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && (
            <>
            <LogoutButton />
            <Profile />
            </>
        )}
        </div>
    );
};

export default App;
