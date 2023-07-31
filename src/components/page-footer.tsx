import Link from "next/link";

export default function PageFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <div className="page-footer__inner">{currentYear}</div>
        </footer>
    );
}
