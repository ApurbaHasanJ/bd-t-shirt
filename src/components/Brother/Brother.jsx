import React, { createContext, useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const one = useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p><small>{one}</small></p>
        </div>
    );
};

export default Brother;