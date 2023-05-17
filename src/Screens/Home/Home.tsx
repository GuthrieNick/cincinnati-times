import React from "react";
import './Home.css';
import Feed from './Feed';
import Stories from "./Stories/Stories";

const Home: React.FC<{}> = () => {
    return (
        <div id='home'>
            <Stories />
            <Feed />
        </div>
    )
}

export default Home;