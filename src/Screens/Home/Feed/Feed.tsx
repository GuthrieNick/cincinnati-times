import React from 'react';
import {Link} from 'react-router-dom';
import './Feed.css'
import Articles from '../../../articles.json';
import { Story, Topics } from '../../../types/Story';
import Headline from '../../../components/Story/Headline';

const Feed = () => {
    let feed:Story[] = [];
    const interests:string[] = [Topics.MUSIC, Topics.TECH];
    for (let article of Articles) {
        if (interests.includes(article.topic)) {
            feed.push(article);
            if (feed.length === 10)
                break;
        }
    }
    
    return (
        <div id='feed-box'>
            <Link to='/feed'><h2 id='feed-title'>Your Feed</h2></Link>
            <hr/>
            {feed.map(story => <p><Headline articleId={story.id} text={story.headline} /></p>)}
        </div>
)};

export default Feed;