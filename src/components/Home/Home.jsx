import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <div className="home_body">
                <Sidebar/>
                <Body/>
            </div>

            <Footer/>
    </div>
    )
}

export default Home
