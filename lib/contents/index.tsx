import Link from "next/link";

export default function IndexContents() {
    return (
        <div className="page-index">
            <div className="introduction">
                <p className="pretitle">Hi-ya! I am</p>
                <h1 className="title">Yehezkiel Dio,</h1>
                <p className="subtitle">
                    a <strong>full-stack developer</strong> based in Balikpapan, Indonesia.
                </p>
                <div className="call-to-action">
                    <Link href="/" className="button button--solid">
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
}
