import { useState, useEffect } from 'react';

const useStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: string | ((prevValue: any) => any)) => {
        try {
            const valueToStore = typeof value === 'function' ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setStoredValue(JSON.parse(window.localStorage.getItem(key) || JSON.stringify(initialValue)));
    }, [key, initialValue]);

    return [storedValue, setValue];
};

export default useStorage;
