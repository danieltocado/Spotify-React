import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import fire from '../../config/firebase'
import "./Sidebar.scss"


class Sidebar extends Component {
    
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this);
    }

    logout()  {
        fire.auth().signOut();
    }

    render(){
        return (
            <div className="sidebar">
                <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>

                <Link to="/"><SidebarOption Icon={HomeIcon} title="Inicio"/></Link>
                <Link to="/search"><SidebarOption Icon={SearchIcon} title="Buscar"/></Link>
                <Link to="/collection"><SidebarOption Icon={LibraryMusicIcon} title="Tu biblioteca"/></Link>

                <br/>
                <strong className="sidebar_title">PLAYLISTS</strong>
                <hr/>

                {/*playlists?.items?.map(playlist => (
                    <SidebarOption title={playlist.name}/>
                ))*/}

                <button onClick={this.logout}>Logout</button>

            </div>
        )}
}

export default Sidebar
