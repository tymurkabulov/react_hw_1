import React from 'react';
import useStorage from '../../hooks/useStorage';

const StorageComponent = () => {
    const [name, setName] = useStorage('name', 'Tymur Kabulov');

    return (
        <div>
            <p>Saved name: {name}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default StorageComponent;

