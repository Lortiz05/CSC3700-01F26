// src/hooks/useFetch.js
import {useState, useEffect} from 'react'

// useFetch is a custom hook — a plain function starting with 'use'
// url is the API endpoint to fetch from
// Every time url changes useFetch runs the fetch again
function useFetch(url) {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

        useEffect(() => {
            setTimeout(() => {
            fetch(url)
                .then(resp => {
                    // Check HTTP status — 404 and 500 do not throw automatically
                    // resp.ok is true for 200-299 status codes
                    if (!resp.ok) {
                        console.log(`Bad Response ${resp.status}`);
                        throw new Error(`HTTP error: ${resp.status}`)
                    }
                    return resp.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    console.log(`Catch Happened Error ${err.message}`);
                    // .catch() handles both network errors and the thrown HTTP errors
                    setError(err.message)
                    setIsPending(false)
                })
        }, 2000);
    }, [url])

    // Return all three values as an object
    // Calling component destructures what it needs
    return {data, isPending, error}
}

export default useFetch