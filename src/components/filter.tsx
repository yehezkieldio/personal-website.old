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
                    className={
                        category === props.activeFilter ? "button button--filter active" : "button button--filter "
                    }
                    onClick={() => props.onFilterChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
