import React from 'react';
import { useParams } from 'react-router-dom';

const CarShowDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Show Detalis of: {id}</h2>
        </div>
    );
};

export default CarShowDetails;