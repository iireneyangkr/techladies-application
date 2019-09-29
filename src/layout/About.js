import React from "react";
import Article from "../component/article"

const contentList = [
    {
        title: "“I am 29 year-old Korean woman working in Singapore.”",
        content: "For the past 5 years, I have been working as a marketer in various industries based in Seoul, Shanghai and Singapore.",
        highlight: "Even though I was in non-tech industries, I came to realized that technology plays a significant role for the success of business. Therefore, I decided to learn JavaScript and NodeJS by forming a study group. For the past 4 months, I built a simple to-do application together with the team and found that I actually enjoy it a lot more than I thought! Now I am looking to pursue my career in programming and TechLadies Bootcamp is where I wish to kick off my journey to a new life."
    },
    {
        title: "“I am a multilingual.”",
        content: "I am native Korean, and fluent in Japanese, English and Chinese. I am certified Korean as a second language teacher. I love learning languages because it allows you to communicate with people and express yourself to make a positive impact.",
        highlight: "Learning programming languages was somewhat similar to learning foreign languages. It allowed me to communicate with computer and programmers all over the world. (Say “Hello World!”) Having technology to build something with my own hands, I feel confident and empowered. I started to think of new projects which could help solve problems which I face in a daily life. I believe it will also help someone who are going through the same life cycle as me. TechLadies Bootcamp is a great opportunity for me to not only enhance programming skills but also share my project with ladies who could possibly benefits from it. (And in the future, I would love to share my experience and knowledge with TechLadies :))"
    },
    {
        title: "“I am a happy wife of Marco and mother of Dan!”",
        content: "I have been married for 5 years and became a mother on 9 September this year. :) Family is the most valuable to me. Family is what makes me myself and enables me to grow.",
        highlight: "Having a wonderful family, I learned that together we can stay strong. Together we can go further. Through Techladies Bootcamp, I want to meet friends of life who are looking to embark on new careers in tech industries or technical roles to inspire and to be inspired."
    }
]

export default function About() {
    return <React.Fragment>
        {contentList.map(c => 
            <Article
                title={c.title}
                content={c.content}
                highlight={c.highlight}
                key={c.title}
        />)}
    </React.Fragment>
  }