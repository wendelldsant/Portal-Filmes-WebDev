import { NavLink } from "react-router-dom"
export default function MovieCard({id, title, backdrop_path}) {
    return(
        <div className="flex flex-col">
            <h1>{title || titulo}</h1>
            <img className = "" src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="foto do filme" srcset="" />
            <li className="list-none"><NavLink to={`/movies:${id}`}>Mais Detalhes</NavLink></li>
        </div>
    )

}