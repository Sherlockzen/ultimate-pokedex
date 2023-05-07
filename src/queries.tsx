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
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return resp;
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