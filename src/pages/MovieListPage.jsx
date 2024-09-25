import { useState } from "react";
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard";
import { list } from "postcss";

export default function MovieListPage(){

    // const [textBotao, setTextBotao ] = useState()

    // const handleClick = () => {
        
    //     setContador((prev)=> prev+1)
    //     console.log(contador)
    // }

    const [search, setSearch] = useState('')
    const[listaFilmes, setListaFilmes] = useState(movies);

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        const filmesFiltrados = movies.filter(filme => ( filme.titulo).includes(search))
        setListaFilmes(filmesFiltrados)
        console.log(listaFilmes)
        if (listaFilmes === ''){
            setListaFilmes (movies)
        }   
    }
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
            <div className="flex">
                {
                    listaFilmes
                        .map(movie=> (
                            <MovieCard key={movie.id} {...movie}/>
                    ))
                            
                }
            </div>
        </>
    )
}   