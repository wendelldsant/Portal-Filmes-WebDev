import { NavLink } from "react-router-dom"
export default function MovieCard({titulo, id, imagem_destaque}) {
    return(
        <div className="flex flex-col">
            <h1>{titulo}</h1>
            <img className = "h-60" src={`/${imagem_destaque}`} alt="foto do filme" srcset="" />
            <li className="list-none"><NavLink to={`/movies:${id}`}>Mais Detalhes</NavLink></li>
        </div>
    )

}