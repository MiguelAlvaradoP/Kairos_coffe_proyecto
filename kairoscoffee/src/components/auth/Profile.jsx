import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <p>Cargando perfil...</p>;

    return (
        isAuthenticated && (
            <div style={{ marginTop: '1rem' }}>
                <img
                    src={user.picture}
                    alt={user.name}
                    style={{ borderRadius: '50%', width: '80px', height: '80px' }}
                />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default Profile;
