import { useEffect, useState } from "react"
import { fetchFilms } from '../helpers/api'

export const useFilms = () => {

    const [films, setFilms] = useState() 
    const [loading, setLoading] = useState(false) 

    useEffect(() => {

        setLoading(true)

        const fetchData = async () => {
            const response = await fetchFilms()
            setFilms(response)
            setLoading(false)
        }

        fetchData()

    }, [])
    
    return [
        films,
        loading
    ]

}
