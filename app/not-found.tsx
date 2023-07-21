import Link from "next/link";

export default function NotFound() {
    return (
        <main className="page-not-found">
            <h1 className="page-not-found--title">404</h1>
            <p className="page-not-found--subtitle">The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link className="button button--underline" href="/">
                Go back
            </Link>
        </main>
    );
}
