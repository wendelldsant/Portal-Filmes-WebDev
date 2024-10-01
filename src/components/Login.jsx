export default function Login({isLogged, handleLogin}){

    return(
        <div className="flex justify-end items-center gap-3">
            {isLogged && <p>Olá Usuário</p>}
                <button 
                onClick={handleLogin}
                className="bg-white text-purple-800 px-4 py-1 rounded"> 
                {isLogged ? "Logout" : "Login"}</button>
        </div>
    )
}