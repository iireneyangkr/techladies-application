import React from "react";
import { Title, Content } from "./styles"

export default function Article(props) {
    return (
        <Content>
            <Title>
                {props.title}
            </Title>
            {props.content}
        </Content>
    )
}