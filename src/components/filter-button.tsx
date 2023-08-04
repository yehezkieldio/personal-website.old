import Link from "next/link";
import Image from "next/image";
import PageTransition from "./page-transition";

export interface FilterButtonProps {
    text: string;
    category: string;
}

export default function FilterButton(props: React.PropsWithChildren<FilterButtonProps>) {
    return (
        <button className="button button--solid">
            <span>{props.text}</span>
        </button>
    );
}
