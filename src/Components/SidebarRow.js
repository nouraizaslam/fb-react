import React from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarRow.css';
import {useStateValue} from './StateProvider';

const SidebarRow = ( { src, Icon, title } ) => {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
            
        </div>
    )
}

export default SidebarRow
