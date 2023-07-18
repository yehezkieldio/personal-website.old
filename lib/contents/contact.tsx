import Image from "next/image";
import Link from "next/link";

export default function ContactContents() {
    return (
        <div className="page-base page-contact">
            <div className="contact-wrapper">
                <header className="contact-header">
                    <h1 className="title">Contact</h1>
                    <p className="subtitle">Get in touch with me through my social media or email me anytime.</p>
                    <p className="contact-notice">
                        Just a friendly reminder that the information provided here is for{" "}
                        <strong>business purposes only</strong>. If you have any questions, feel free to chat with me
                        directly on my social media.
                    </p>
                </header>
                <section className="contact-section">
                    <table className="contact-detail">
                        <thead>
                            <tr>
                                <th>Contact</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Address</td>
                                <td>Balikpapan, Indonesia</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <Link href="mailto:yehezkieldio@proton.me">yehezkieldio@proton.me</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="social-media-detail">
                        <thead>
                            <tr>
                                <th>Social Media</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Instagram</td>
                                <td>
                                    <Link href="https://www.instagram.com/yhezkiel.dio/">@yhekiel.dio</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Discord</td>
                                <td>
                                    <Link href="https://discord.com/users/327849142774923266">elizielx</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}
