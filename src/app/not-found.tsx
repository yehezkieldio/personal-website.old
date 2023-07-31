import Link from "next/link";

export default function NotFound() {
    return (
        <main className="page-not-found">
            <div className="page-not-found__container">
                <h1 className="page-not-found__title">404</h1>
                <p className="page-not-found__description">The page you&apos;re looking for doesn&apos;t exist.</p>
                <Link className="button button--underline" href="/">
                    Go back
                </Link>
            </div>
        </main>
    );
}
