import { useState, useEffect } from "react";

const useFetchCharacter = (url) => {
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()

                setCharacter(data)
                setLoading(false)
            } catch (error) {
                console.error('Error al cargar los datos', error)
                setLoading(false)
            }
        }
        fetchCharacter()
        console.log(character);
    }, [url])
    return { character, loading }
}

export default useFetchCharacter