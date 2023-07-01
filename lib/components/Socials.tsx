import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export const Socials = () => {
    return (
        <ul className="socials">
            <li className="socials-item">
                <span className="is-icon">
                    <Link href="https://www.instagram.com/yhezkiel.dio/" legacyBehavior>
                        <FaInstagram size={28} />
                    </Link>
                </span>
            </li>
            <li className="socials-item">
                <span className="is-icon">
                    <Link href="https://github.com/elizielx" legacyBehavior>
                        <FaGithub size={28} />
                    </Link>
                </span>
            </li>
            <li className="socials-item">
                <span className="is-icon">
                    <Link href="https://discord.com/users/327849142774923266" legacyBehavior>
                        <FaDiscord size={28} />
                    </Link>
                </span>
            </li>
        </ul>
    );
};

export default Socials;
