import React from "react";
import Headline from "./Headline";

type Props = {
    url: string;
    headline: string;
    blurb: string;
    author: string;
    published: number;
}

const Story = ({url, headline, blurb, author, published}: Props) => {
    let postDate:Date = new Date(published);
    return (
        <div>
            <Headline {...{articleId: url, text: headline}}/><br/>
            <i>Written by {author || "Anonymous"} on {postDate.toLocaleDateString()}</i>
            <p>{blurb}</p>
        </div>
    );
};

export default Story;