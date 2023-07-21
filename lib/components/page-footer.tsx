import Link from "next/link";

export default function PageFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <p className="page-footer--content">
                This website design is inspired by <Link href="https://www.stefanfmeyer.com/">stefanfmeyer</Link>.
                <br />
                The source code for this site is available on{" "}
                <Link href="https://github.com/elizielx/eleutheria">GitHub</Link> under the MIT License.
            </p>
            <p className="page-footer--content">
                Copyright © {currentYear} <span className="highlight">Yehezkiel Dio Sinolungan</span>. All Rights
                Reserved.
            </p>
        </footer>
    );
}
