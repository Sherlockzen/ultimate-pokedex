// import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export function GetPokemons() {
//     const pokemons = useQuery({
//         queryKey: ['pokemons'],
//         queryFn: () => axiosGet().then((data) => data?.data)
//     })
//     return pokemons;
// }

export async function axiosGet () {
    try {
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export async function pokemonsPaginated (urlNext = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20") {
    try {
        const resul = (await axios.get(urlNext)).data;
        // console.log(resul);
        return resul;
    } catch (error) {
        console.log(error);   
    }
}

export async function getPokemon(url: string) {
    try {
        const resp = await axios.get(url)
        return resp;
    } catch (error) {
        console.log(error);
    }
}

export async function getGenerations() {
    try {
        return await axios.get('https://pokeapi.co/api/v2/generation')
    } catch (error) {
        console.log(error);
        
    }
}