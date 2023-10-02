import "../../styles/home/blog.scss";
import Image from "next/image";
export default function Blog(){
    return (
        <article className="blog">
            <div className="b-img">
                <Image width={2000} height={1333} src="/assets/images/header1.jpg" alt="en tete"/>
            </div>
            <div className="b-textes">

                <div className="b-textes-head">
                    <p className="b-types">ARTICLE</p>
                    <p className="b-date">mar. 18 juillet 2023</p>
                </div>

                <div className="b-texte-body">
                    <p className="b-titre">
                        Iprehenderit eiusmod ipsum sunt voluptate in proident.
                    </p>
                    <p className="b-content">
                        Enim aliquip ea enim ex deserunt veniam amet tempor eu.Occaecat Lorem cillum proident voluptate magna mollit sit in.
                    </p>
                </div>
            </div>
        </article>
    );
}