"use client";

import Link from "next/link";
import Navbar from "#/lib/components/Navbar";
import Layout from "#/lib/components/Layout";
import Socials from "#/lib/components/Socials";

export default function Home() {
    return (
        <>
            <Navbar />
            <Layout title="elizielx">
                <p className="subtitle">
                    Hi-ya! I am <span>Yehezkiel Dio</span> aka <span>elizielx</span> — a full-stack developer based in{" "}
                    <span>Balikpapan, 🇮🇩 Indonesia. </span> I&apos;m currently working on <span>web development</span>,
                    and have keen interest in <span>software architecture</span>, and learning new things.
                </p>
                <p className="subtitle">
                    For the present, — I spend most of my time reading <span>fanfictions</span>! and <em>trying</em> to
                    find more <span>fanfictions</span> to read. Check out{" "}
                    <Link href="#" legacyBehavior>
                        <a>this section</a>
                    </Link>{" "}
                    for some of my personal favorites.
                </p>
            </Layout>
        </>
    );
}
