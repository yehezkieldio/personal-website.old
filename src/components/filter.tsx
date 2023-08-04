import Link from "next/link";
import Image from "next/image";
import PageTransition from "./page-transition";

export interface FilterProps {
    categories: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export default function Filter(props: React.PropsWithChildren<FilterProps>) {
    return (
        <div className="buttons">
            {props.categories.map((category) => (
                <button
                    key={category}
                    className={category === props.activeFilter ? "button button-solid active" : "button button-solid "}
                    onClick={() => props.onFilterChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
