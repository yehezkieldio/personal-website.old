import Link from "next/link";
import useScroll from "../hooks/use-on-scroll";

export default function PageNavigation() {
    const isScrolled = useScroll(0);

    return (
        <nav className={`page-navigation ${isScrolled ? "is-scrolled" : ""}`}>
            <div className="page-navigation--container page-container">
                <div className="page-navigation--content">
                    <Link className="page-navigation--content-item" href="/projects">
                        Projects
                    </Link>
                    <Link className="page-navigation--content-item" href="/contact">
                        Contact
                    </Link>
                </div>
                <Link className="arrow" href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 "
                    >
                        <line x1="19" x2="5" y1="12" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
            </div>
        </nav>
    );
}
