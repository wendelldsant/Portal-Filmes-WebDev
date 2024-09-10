import { useParams } from "react-router-dom"
export default function MovieDetailPage(){
    const { id } = useParams()
    return(
        <>
        <h1>Movie Detail Page</h1>
        <h1>O ID do filme é: {id}</h1>
        </>
    )
}