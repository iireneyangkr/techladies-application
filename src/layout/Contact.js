import React from "react";
import Article from "../component/article"
import linkedinIcon from "./linkedin.png"
import githubIcon from "./github.svg"
import emailIcon from "./email.png"

export default function Contact() {
    return <React.Fragment>
        <Article 
            title={"Please contact me!"}
            content={"Click below icons to connect with me via LinkedIn, Github and email."}
        />
        <Article>
            <a href="https://www.linkedin.com/in/ireneyangkr" target="_blank" rel="noopener noreferrer">
                <img style={{ width: "3%", padding: "0px 15px 0px 0px" }} src={linkedinIcon} className="image" alt="linkedin" />
            </a>
            <a href="https://github.com/iireneyangkr" target="_blank" rel="noopener noreferrer">
                <img style={{ width: "3%", padding: "0px 15px 0px 0px" }} src={githubIcon} className="image" alt="github" />
            </a>
            <a href="mailto:iireneyangkr@gmail.com" target="_blank" rel="noopener noreferrer">
                <img style={{ width: "3%" }} src={emailIcon} className="image" alt="email" />
            </a>
        </Article>
    </React.Fragment>
}