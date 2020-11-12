import { useEffect, useState } from 'react'

const getValueFromLocalStorage = (key, initialValue) => {
    const val = JSON.parse(localStorage.getItem(key));
    if (val) return val

    return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(getValueFromLocalStorage(key, initialValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
