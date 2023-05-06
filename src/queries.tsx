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
        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon')
        return resp;
    } catch (error) {
        console.log(error);
    }
}