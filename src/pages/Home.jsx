import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from './Search.jsx';
import "./Home.css"

function Home(){
    return (
        <div class="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <p>About</p>
                    <p>Store</p>

                </div>
                <div className="home_headerRight">
                    <p>Gmail</p>
                    <p>Images</p>
                   <AppsIcon/>
                   <AccountCircleIcon/>
                   
                </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
               <div className="home_inputContainer">
               <Search/>
               </div>
            </div>
        </div>
    )
}
export default Home