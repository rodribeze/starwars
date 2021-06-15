
const base = 'https://swapi.dev/api'

export const fetchFilms = async (search) => {

    let url = new URL(`${base}/films/`)
    let params = {}

    if(search){
        params.search = search
    }

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url)
    const json = await response.json()
    return json;
} 

export const fetchFilmById = async (id) => {
    const response = await fetch(`${base}/films/${id}/`)
    const json = await response.json()
    return json;
} 

export const fetchPeopleById = async (id) => {
    const response = await fetch(`${base}/people/${id}/`)
    const json = await response.json()
    return json;
} 