import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { pokeList } from "./types/pokemonList"
import Card from "./components/Card"
import ListPokemons from "./components/ListPokemons"

function App() {

  return (
    <main>
      <Navbar title="Filters">
        <div className=" flex flex-col items-center gap-10">
          <h1 className=" mt-12 text-5xl">Lista de pokemons</h1>
          <ListPokemons />
        </div>
      </Navbar>
    </main>
  );
}

export default App
