import React from 'react';
import './Feed.css';
import { StoryReel } from './StoryReel';
import { MessageSender } from './MessageSender';
import { Post } from './Post';

export const Feed = () => {
   return (
        <div className="feed">
            {/* Story Reel component */}
            <StoryReel />
            <MessageSender />
            <Post
                // username={username}
                // message={message}
                // timestamp={timestamp}
                // profilePic={profilePic}
                // image={image}
            />
            <Post
                // username={username}
                // message={message}
                // timestamp={timestamp}
                // profilePic={profilePic}
                // image={image}
            />
            <Post
                // username={username}
                // message={message}
                // timestamp={timestamp}
                // profilePic={profilePic}
                // image={image}
            />
        </div>
   )
}