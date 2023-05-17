import React from 'react';
import './Story.css';

type Props = {
    articleId: string;
    text: string;
}

const Headline = ({articleId: url, text}: Props) => (
    <h2><a href={'/article/' + url}>{text}</a></h2>
);

export default Headline;