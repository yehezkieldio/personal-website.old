import Link from "next/link";

export default function PageFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <div className="page-footer-content">
                <p className="open-source">
                    The source code for this site is available on{" "}
                    <Link href="https://github.com/elizielx/eleutheria" target="_blank" rel="noreferrer nofollow">
                        GitHub
                    </Link>{" "}
                    under the MIT License.
                </p>
                <p className="copyright">
                    Copyright © {currentYear} <span className="highlight">Yehezkiel Dio Sinolungan</span>. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
}
