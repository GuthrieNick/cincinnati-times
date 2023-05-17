import React from "react";
import {useParams} from 'react-router-dom';
import Articles from '../../articles.json';

const Article = () => {
    const {id} = useParams();
    return (
        <pre>{JSON.stringify(Articles.filter(article => article.id === id)[0], null, 2)}</pre>
    )
}

export default Article;