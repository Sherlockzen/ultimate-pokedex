import { axiosGet } from "../queries";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";

const ListPokemons = () => {

    const { status, error, data: pokemons} = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => axiosGet().then((e) => e?.data)
    })
    
    return (
        <div className={" ListPokes flex flex-wrap gap-10 justify-center"}>
           {
            pokemons?.results.map((elem: {name: string, url: string}) => 
                <Card key={elem.name} name={elem.name} />
            )
           } 
        </div>
    )
}

export default ListPokemons;