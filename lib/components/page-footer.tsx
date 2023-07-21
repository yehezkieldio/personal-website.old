import Link from "next/link";

export default function PageFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <p className="page-footer--content">
                Copyright © {currentYear} <span className="highlight">Yehezkiel Dio Sinolungan</span>. All Rights
                Reserved.
                {/* <br />
                This website is open source and be found on{" "}
                <Link href="https://github.com/elizielx/eleutheria">GitHub</Link>. */}
            </p>
        </footer>
    );
}
