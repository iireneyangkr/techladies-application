import React from "react";
import Article from "../component/article"
import image from "./Heeeun.jpg"

export default function Home() {
    return <React.Fragment>
        <Article 
            title={"Heeeun's TechLadies Bootcamp #5 Application"}
            content={"This simple website is to show who I am and why I want to be part of the TechLadies Bootcamp!"} 
        />
        <Article>
            <img style={{ width: "100%" }} src={image} className="image" alt="heeeun" />
        </Article>
    </React.Fragment>
  }