import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import './Header.scss'

function Header() {
   
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon/>
                <input type="text" placeholder="Search for Artists, Songs, or Playlists"/>
            </div>
            <div className="header_right">
                <Avatar src="" alt="" />
                <h4>nombre usuario</h4>
            </div>
        </div>
    )
}

export default Header
