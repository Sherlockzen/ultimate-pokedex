import { axiosGet, getPokemon } from "../queries";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";

const ListPokemons = () => {
    const { status, error, data: pokemons} = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => axiosGet().then((e) => e?.data)
    })

    if (status === 'loading') return <progress className="progress w-56"></progress>
    if (status === 'error') return <h1>{JSON.stringify(error)}</h1>

    return (
        <div className={" ListPokes flex flex-wrap gap-10 justify-center"}>
           {
            pokemons?.results.map((elem: {name: string, url: string}) => 
                <Card key={elem.name} name={elem.name} url={elem.url} />
            )
           } 
        </div>
    )
}

export default ListPokemons;