import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="btn btn-sm btn-outline-light"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
            <span className="fw-bold">CERRAR SESIÓN</span>
        </button>
    );
};
