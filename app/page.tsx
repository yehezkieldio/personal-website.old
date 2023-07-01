"use client";

import Link from "next/link";
import Navbar from "#/lib/components/Navbar";
import Layout from "#/lib/components/Layout";
import { FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Navbar />
            <Layout title="elizielx">
                <p className="subtitle">
                    Hi-ya! I am <strong>Yehezkiel Dio</strong> aka <strong>elizielx</strong> — full-stack developer
                    based in <strong>Balikpapan, Indonesia.</strong> <br />
                    Currently working on <strong>web development</strong>, interested in{" "}
                    <strong>software architecture</strong>, and learning whatever I see fit. <br />
                </p>
                <p className="subtitle">
                    For the present, — I spend most of my time reading fanfictions! and <em>trying</em> to find more
                    fanfictions to read. Check out{" "}
                    <Link href="#" legacyBehavior>
                        <a>this section</a>
                    </Link>{" "}
                    for some of my personal favorites.
                </p>
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
            </Layout>
        </>
    );
}
