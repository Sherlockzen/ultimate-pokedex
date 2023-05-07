import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../queries";

interface PropsCard {
    name: string,
    url: string,
}

// interface dataPoke {
//   sprites: {other: {dream_world: {front_default: string}}}
// }

export interface PokeType {
  type: Type
}

export interface Type {
  name: string
  url: string
}

function Card({ name, url }: PropsCard) {
    const { data } = useQuery({
      queryKey: ['pokemon', name],
      queryFn: () => getPokemon(url)
    }) 

  // console.log(types)
  

  return (
    <div className="card w-96 shadow-xl">
      <figure className=" w-32 h-32 m-auto">
        <img
          className=" w-full h-full"  
          src={data?.data.sprites.other.dream_world.front_default}
          alt={name + " sprite"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">
          {name}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          {
            data?.data.types?.map( (type: PokeType) => 
              <div key={type.type.name} className={`badge badge-outline flex items-start uppercase drop-shadow ${type.type.name}-gradient`}>
                <span>{type.type.name}</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Card