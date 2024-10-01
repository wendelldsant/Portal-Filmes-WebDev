import { NavLink } from "react-router-dom"
import Login from "../components/Login"
import { useState } from "react"

export default function Header(){
    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () =>{
        setIsLogged(!isLogged)  
    }
    return(
        
        <>
            <header className="flex w-full h-14 bg-purple-800 justify-around text-white items-center">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Filmes</NavLink></li>
                        <li><NavLink to='/genre'>Generos</NavLink></li>
                        {isLogged && <li><NavLink to='/settings'>Configurações</NavLink></li>}
                    </ul>
                    
                </nav>
                <Login isLogged = {isLogged} handleLogin = {handleLogin}/>
            </header>
        </>
    )
}