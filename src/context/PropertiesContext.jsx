import { createContext, useState, useEffect } from 'react';

const PropertiesContext = createContext();


const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when the app mounts
    useEffect(() => {
        fetch('/properties.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load property data');
                }
                return response.json();
            })
            .then((data) => {
                setProperties(data.properties);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []); 
    return (
        <PropertiesContext.Provider value={{ properties, loading, error }}>
            {children}
        </PropertiesContext.Provider>
    );

};
export { PropertiesProvider, PropertiesContext };
