
const base = 'https://swapi.dev/api'

export const fetchFilms = async () => {
    const response = await fetch(`${base}/films/`)
    const json = await response.json()
    return json;
} 

export const fetchFilmById = async (id) => {
    const response = await fetch(`${base}/films/${id}/`)
    const json = await response.json()
    return json;
} 