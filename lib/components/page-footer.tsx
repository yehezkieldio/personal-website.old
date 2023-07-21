import Link from "next/link";

export default function PageFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <p className="page-footer--content">
                This website design is inspired by{" "}
                <Link href="https://www.stefanfmeyer.com/" target="_blank" rel="noreferrer nofollow">
                    stefanfmeyer{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="anchor-arrow"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
                .
                <br />
                The source code for this site is available on{" "}
                <Link href="https://github.com/elizielx/eleutheria" target="_blank" rel="noreferrer nofollow">
                    GitHub{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="anchor-arrow"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>{" "}
                under the MIT License.
            </p>
            <p className="page-footer--content">
                Copyright © {currentYear} <span className="highlight">Yehezkiel Dio Sinolungan</span>. All Rights
                Reserved.
            </p>
        </footer>
    );
}
