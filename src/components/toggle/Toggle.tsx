import React from 'react';
import useToggle from '../../hooks/useToggle';

const Toggle: React.FC = () => {
    const [isToggled, toggle] = useToggle();

    return (
        <div>
            <p>State: {isToggled ? 'true' : 'false'}</p>
            <button onClick={toggle}>Press to switch</button>
        </div>
    );
};

export default Toggle;
