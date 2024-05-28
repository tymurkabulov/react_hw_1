import React, { useState } from 'react';
import usePrevious from '../../hooks/usePrevious';

const Previous = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p>Current count: {count}</p>
            <p>Previous count: {prevCount}</p>
            <button onClick={() => setCount(count + 1)}>Button</button>
        </div>
    );
};

export default Previous;
