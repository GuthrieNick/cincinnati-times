import React from "react";
import Articles from '../../../articles.json';
import Story from "../../../components/Story/Story";

const Stories: React.FC<{}> = () => {
    return (
        <div>
            {Articles.map(article =>
                <Story {...article} url={article.id} />
            )}
        </div>
    )
}

export default Stories;