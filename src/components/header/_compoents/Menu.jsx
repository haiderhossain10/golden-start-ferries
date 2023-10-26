import navigations from "@/data/navigations";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="flex-1">
            <ul className="flex items-center gap-[22px]">
                {navigations.map((navigation, i) => (
                    <Link className="text-white" key={i} to={navigation.path}>
                        {navigation.lebel}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
