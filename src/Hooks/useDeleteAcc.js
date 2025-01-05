
import { useState } from 'react';

export function useDeleteAcc(authToken) {
    const [error, setError] = useState(null);

    const deleteAcc = async (password) => {
        try {
            const response = await fetch('https://cakrawidia-4ae06d46343e.herokuapp.com/api/me', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }), // Send the password in the body
            });

            // Handle successful deletion (e.g., logging out or redirecting)
        } catch (error) {

            setError(error.message);
            throw error; // Re-throw the error to handle it in the component
        }
    };

    return { deleteAcc, error };
}
