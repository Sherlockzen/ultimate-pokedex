import { axiosGet } from "../queries";
import Card from "./Card";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { pokemonsPaginated } from "../queries";
// import { useEffect } from "react";

interface Iprev {
    count: number
    next: string
    previous: string
    results: any[]
  }

const ListPokemons = () => {
    // const { status, error, data: pokemons} = useQuery({
    //     queryKey: ['pokemons'],
    //     queryFn: () => axiosGet().then((e) => e?.data)
    // })

    const {
        data: pokemons,
        error,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        getNextPageParam: (prevData: Iprev) => prevData?.next,
        queryFn: ({ pageParam }) => pokemonsPaginated(pageParam) 
    })

    console.log(pokemons?.pages);
    

    if (status === 'loading') return <progress className="progress w-56"></progress>
    if (status === 'error') return <h1>{JSON.stringify(error)}</h1>

    
    return (
      <>
        <div className={" ListPokes flex flex-wrap gap-10 justify-center"}>
          {/* {
               pokemons?.results.map((elem: {name: string, url: string}) => 
                <Card key={elem.name} name={elem.name} url={elem.url} />
                )
            }  */}

          {pokemons?.pages
            .flatMap((data) => data.results)
            .map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
        </div>
        {hasNextPage && (
          <button
            className=" border border-black"
            onClick={() => fetchNextPage()}
          >
            Load more
          </button>
        )}
      </>
    );
}

export default ListPokemons;