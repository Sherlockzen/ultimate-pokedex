import Card from "./Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { pokemonsPaginated } from "../queries";
import { useCallback, useEffect, useRef, useState } from "react";
// import { useEffect } from "react";

interface Iprev {
    count: number
    next: string
    previous: string
    results: any[]
  }

const ListPokemons = () => {
    const componentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const {
        data: pokemons,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        getNextPageParam: (prevData: Iprev) => prevData?.next,
        queryFn: ({ pageParam }) => pokemonsPaginated(pageParam) 
    })


    if (status === 'loading') return <progress className="progress w-56"></progress>
    if (status === 'error') return <h1>{JSON.stringify(error)}</h1>


    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      })
      if (componentRef.current) observer.observe(componentRef.current);
    }, [])

    console.log(isVisible);
    
    
    return (
      <>
        <div className={" ListPokes flex flex-wrap gap-10 justify-center"}>
          {/* {
               pokemons?.results.map((elem: {name: string, url: string}) => 
                <Card key={elem.name} name={elem.name} url={elem.url} />
                )
            }  */}

          {
            pokemons?.pages
            .flatMap((data) => data.results)
            .map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))
          }


        </div>
        {/* {hasNextPage && ( */}
          <div
            ref={componentRef}
            className=" border border-black"
            onClick={() => fetchNextPage()}
          >
            Load more
          </div>
        {/* )} */}
      </>
    );
}

export default ListPokemons;