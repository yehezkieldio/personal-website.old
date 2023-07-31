import useScroll from "../hooks/use-on-scroll";

export default function PageNavigation() {
    const isScrolled = useScroll(0);

    return (
        <nav className={`page-navigation ${isScrolled ? "page-navigation--sticky" : ""}`}>
            <div className="page-navigation__container page-container">
                <div className="page-navigation__inner">Navigation</div>
            </div>
        </nav>
    );
}
