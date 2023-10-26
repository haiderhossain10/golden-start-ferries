import navigations from "@/data/navigations";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="flex-1">
            <ul className="flex items-center gap-[22px]">
                {navigations.map((navigation, i) => (
                    <Link
                        className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-theme-yellow after:transition-all after:duration-150 after:hover:w-full"
                        key={i}
                        to={navigation.path}
                    >
                        {navigation.lebel}
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
