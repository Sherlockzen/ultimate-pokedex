import Card from "./Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { pokemonsPaginated } from "../queries";
import { useEffect, useRef, useState } from "react";
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
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        getNextPageParam: (prevData: Iprev) => prevData?.next,
        queryFn: ({ pageParam }) => pokemonsPaginated(pageParam) 
    })


    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        // {
        //   rootMargin: '0px',
        //   threshold: 0.1,
        // },
      );
      if (componentRef.current) {
        observer.observe(componentRef.current);
      }
      return () => {
        if (componentRef.current) {
          observer.unobserve;
        }
      };
    }, [componentRef]);
    
    useEffect(() => {
      console.log(isVisible);
      if (isVisible) {
        console.log('fetch');
        
        fetchNextPage();
      }
    }, [isVisible])
    

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
          <div
            ref={componentRef}
            className=" border border-black"
            onClick={() => fetchNextPage()}
          >
            Load more
          </div>
        )}
      </>
    );
}

export default ListPokemons;