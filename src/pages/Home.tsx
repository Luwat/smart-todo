import { Link } from "react-router-dom";

export default function HomePage() {
    return <><h1>HomePage</h1> <Link to={'/todos'}>View all Todos</Link></>
}