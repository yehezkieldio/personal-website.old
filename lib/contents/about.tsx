import Image from "next/image";
import Link from "next/link";

export default function AboutContents() {
    return (
        <div className="page-base page-about">
            <div className="about-wrapper">
                <div className="about-profile">
                    <Image
                        className="about-profile--image"
                        src="/about-profile.jpg"
                        width={120}
                        height={120}
                        alt="Picture of the author"
                    />
                    <h3 className="about-profile--title">Yehezkiel Dio</h3>
                    <p className="about-profile--subtitle">Full-stack Developer</p>
                </div>
                <div className="about-content">
                    <p className="inner-content">
                        Hello there! My name is <strong>Yehezkiel Dio</strong>, but I prefer the name{" "}
                        <strong>Eliziel</strong> or <strong>Liz</strong> on the internet. I&apos;m a full-stack
                        developer with a vocational high school background and currently a student at{" "}
                        <Link href="https://universitasmulia.ac.id" target="_blank" rel="noopener noreferrer">
                            Universitas Mulia
                        </Link>{" "}
                        majoring in Informatics.
                    </p>
                </div>
            </div>
        </div>
    );
}
