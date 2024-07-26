import { Link } from "react-router-dom";

export default function SideNav() {
    return <aside className="h-screen w-3/12 bg-teal-700 text-teal-100">
        <section>
            <h1 className="text-5xl font-bold">Smart Todo</h1>
        </section>
        <section>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                </ul>
                <ul>
                    <li><Link to={"/todos"}>View all Todos</Link></li>
                </ul>
                <ul>
                    <li><Link to={"/todos/create"}>Create Todo</Link></li>
                </ul>
            </nav>
        </section>
    </aside>
}