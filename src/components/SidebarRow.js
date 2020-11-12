import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

export const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div>
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <p>{title}</p>
        </div>
    )
}
