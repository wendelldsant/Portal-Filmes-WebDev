import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function MovieListPage(){

    // const [textBotao, setTextBotao ] = useState()

    // const handleClick = () => {
        
    //     setContador((prev)=> prev+1)
    //     console.log(contador)
    // }

    const [search, setSearch] = useState('')
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br')
        .then( results => results.json())
        .then(data => setFilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Cabou!"))
    },[])


    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    const filmesFiltrados = filmes.filter(filme => filme.title.toLowerCase().includes(search.toLowerCase()))


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
            <section className="grid grid-cols-4 gap-6 h-52 text-xs">
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