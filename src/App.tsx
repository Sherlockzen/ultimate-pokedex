import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { pokeList } from "./types/pokemonList"
import Card from "./components/Card"
import ListPokemons from "./components/ListPokemons"

function App() {
const [pokeList, setPokeList] = useState<pokeList>({
  count: 0,
  next: '',
  previous: '',
  results: [],
})
  // useEffect(() => {
  //   const pokemons: pokeList = GetPokemons().data;

  //   setPokeList(pokemons);
  // },[])

  return (
    <main>
      <Navbar title="Filters">
        <div className=" flex flex-col items-center">
          <h1>Lista de pokemons</h1>
          <ListPokemons />
        </div>
      </Navbar>
    </main>
  );
}

export default App
