import React from "react";
import { Title, Content, Highlight } from "./styles"

export default function Article(props) {
    return (
        <Content>
            {props.children}
            <Title>
                {props.title}
            </Title>
            {props.content}
            <Highlight>
                {props.highlight}
            </Highlight>
        </Content>
    )
}