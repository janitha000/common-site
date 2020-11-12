
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(url)
        if (!url) return;

        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                console.log(data)
                setData(data);
                setLoading(false)
            }
            catch (err) {
                console.log(err)
                //setLoading(false)
                //setError(err)
            }
        }

        fetchData();


    }, [url])

    return { isLoading, error, data };

}


