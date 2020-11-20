import React from 'react';
import './Feed.css';
import { StoryReel } from './StoryReel';

export const Feed = () => {
   return (
        <div className="feed">
            {/* Story Reel component */}
            <StoryReel />
        </div>
   )
}