import React from 'react';
import './Feed.css';
import { StoryReel } from './StoryReel';
import { MessageSender } from './MessageSender';

export const Feed = () => {
   return (
        <div className="feed">
            {/* Story Reel component */}
            <StoryReel />
            <MessageSender />
        </div>
   )
}