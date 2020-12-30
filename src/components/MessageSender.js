import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export const MessageSender = () => {

    const [input, setInput]= useState('');
    const [imageURL, setImageURL] = useState('');

    // setInput()

    const handleSubmit = (e) => {
        e.preventDefault(); // To avoid refreshing of the page after form is submitted..

        //After submitting the form, reset it.
        setInput("");
        setImageURL("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="messageSender__input"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}>
                    </input>
                    <input
                        type="text"
                        placeholder="image URL (Optional)"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}>
                    </input>
                    <button type="submit" onClick={ handleSubmit }>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "yellow" }}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
