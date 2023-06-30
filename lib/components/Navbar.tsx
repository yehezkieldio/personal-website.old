import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <header className="page-header">
            <nav className="navbar is-transparent" role="navigation">
                <div className="navbar-brand">
                    <Link href="/" legacyBehavior>
                        <a className="navbar-item">Yehezkiel Dio (elizielx)</a>
                    </Link>
                    <a
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        role="button"
                        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div className="navbar-end">
                        {/* <Link href="#" legacyBehavior>
                            <a className="navbar-item">about</a>
                        </Link> */}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
