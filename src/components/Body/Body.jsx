import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Body.scss'
import SongRow from '../SongRow/SongRow';
import Axios from 'axios';
import PlaylistInfo from '../PlaylistInfo/PlaylistInfo';



const Body = () => {
    
    const [categoryMood, setCategoryMood] = useState() 
    const [categoryRock, setCategoryRock] = useState() 
    const [categoryParty, setCategoryParty] = useState() 

    const token = 'BQCK7hav7IU4ah19-kQrD8hkfQEzIwgyDrxPKmadBP21fdhidMRoexzXYyt9ZMmTdY34O6-ODMg3Lq0mhtoh4ls1APWeWpjpSJA-shey0SyDFMxdatJbAb3Te8olJ5wb4ZuCSaI0MoWO5OsymAe1iBOpuGahLDfDaF-bgp1TOTIig6aq'

    useEffect(()=> {
        Axios.get(`https://api.spotify.com/v1/browse/categories/mood/playlists?locale=es_ES&limit=9`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then((res) => {
          const mood = res.data;
          console.log(mood)
          setCategoryMood(mood)
        });

        Axios.get(`https://api.spotify.com/v1/browse/categories/rock/playlists?locale=es_ES&limit=9`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then((res) => {
          const rock = res.data;
          console.log(rock)
          setCategoryRock(rock)
        });

        Axios.get(`https://api.spotify.com/v1/browse/categories/party/playlists?locale=es_ES&limit=9`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        }).then((res) => {
          const party = res.data;
          console.log(party)
          setCategoryParty(party)
        });
      },[])

    return (
        <div className="body">
            <Header/> 
        <div className="category_info"> 
            <Link to="/category/mood"><h2>Estado de ánimo</h2></Link>
            <h5>Playlists que van con tu estado de ánimo.</h5>
        </div>
        <div className="body_playlist">
        
        {categoryMood?.playlists.items.map(item => (
                <PlaylistInfo key={item.id} image={item.images[0].url} name={item.name} description={item.description}/>
            )) 
        }
        
        </div>

        <div className="category_info">
            <Link to="/category/rock"><h2>Rock</h2></Link>
            <h5>Playlists que van con tu estado de ánimo.</h5>
        </div>
        <div className="body_playlist">
        
        {categoryRock?.playlists.items.map(item => (
                <PlaylistInfo key={item.id} image={item.images[0].url} name={item.name} description={item.description}/>
            )) 
        }
         
        </div>

        <div className="category_info">
            <Link to="/category/party"><h2>Party</h2></Link>
            <h5>Playlists que van con tu estado de ánimo.</h5>
        </div>
        <div className="body_playlist">
        
        {categoryParty?.playlists.items.map(item => (
                <PlaylistInfo key={item.id} image={item.images[0].url} name={item.name} description={item.description}/>
            )) 
        }
         
        </div>

           {/* 
           
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
                 List of songs 
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow track={item.track}/> 
                ))}}
                {genres?.categories.items.map(item => (
                    <li>{item.name} - {item.icons[0].url}</li> 
                ))
                
            </div>*/}
        </div>
    )
}



export default Body
