import React from "react";
import Articles from '../../../articles.json';
import Story from "../../../components/Story/Story";

const Stories: React.FC<{}> = () => {
    return (
        <div>
            {Articles.map(article =>
                <Story key={article.id} {...article} url={article.id} />
            )}
        </div>
    )
}

export default Stories;