import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <>
            <header>
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/movies'>Filmes</NavLink>
                        <NavLink to='/genre'>Generos</NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}