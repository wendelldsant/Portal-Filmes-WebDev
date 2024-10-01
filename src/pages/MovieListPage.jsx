import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){

    // const [textBotao, setTextBotao ] = useState()

    // const handleClick = () => {
        
    //     setContador((prev)=> prev+1)
    //     console.log(contador)
    // }

    const [search, setSearch] = useState('')

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    const filmesFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))
    console.log(filmesFiltrados)


    return(
        <>
            <h2>Veja a Lista Completa de Filmes</h2>   
            <input 
            className="text-black"
            type="text" 
            name="search" 
            id="search" 
            placeholder="Digite o filme aqui"
            value={search}
            onChange={handleSearch}
            />
            <section className="flex">
                {
                    filmesFiltrados.length>0 ?
                    filmesFiltrados
                        .map(filme=> (
                            <MovieCard key={filme.id} {...filme}/>
                    ))
                    :
                    <p>Filme não encontrado</p>
                            
                }
            </section>
        </>
    )
}   