import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import './Header.scss'

class Header extends Component {
   
    constructor(props) {
        super(props);
        
        this.state = {
            user: []
        }
        
        console.log(this.state.user)
    }

    render() {
        return (
            <div className="header">
                <div className="header_left">
                    <SearchIcon/>
                    <input type="text" placeholder="Search for Artists, Songs, or Playlists"/>
                </div>
                <div className="header_right">
                    <Avatar src="" alt="" />
                    <h4>{this.state.email}</h4>
                </div>
            </div>
        )}
}

export default Header
