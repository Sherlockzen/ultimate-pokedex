import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../queries";

interface PropsCard {
    name: string,
    url: string,
}

function Card({ name, url }: PropsCard) {
    const { data } = useQuery({
      queryKey: ['pokemon', name],
      queryFn: () => getPokemon(url).then((e) => e?.data)
    })  


//   console.log(data.sprites.other.dream_world.front_default);
  

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className=" w-32 h-32 m-auto">
        <img
          className=" w-full h-full"  
          src={data.sprites.other.dream_world.front_default}
          alt={name + " sprite"}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default Card