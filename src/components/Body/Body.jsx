import React from 'react'
import Header from '../Header/Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Body.scss'
import SongRow from '../SongRow/SongRow';

function Body() {


    return (
        <div className="body">
            <Header/>

            <div className="body_info">
                <img src="" alt=""/>
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover weekly</h2>
                    <p>description</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>
                {/* List of songs 
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track}/> 
                ))}*/}
            </div>
        </div>
    )
}

export default Body
