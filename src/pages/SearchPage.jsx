import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search.jsx';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./SearchPage.css"
import { Description } from '@mui/icons-material';

function SearchPage(){
    return(
        <div className="searchPage">
            <div className="searchPage_header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                </Link>

                <div className="searchPage_headerBody">
                    <Search hidebuttons/>
                    <div className="searchPage_options">
                        <div className="searchPage_optionLeft">
                            <div className="searchPage_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage_option">
                                <DescriptionIcon  />
                                <Link to="/all">News</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className="searchPage_option">

                                <LocationOnIcon/>
                                <Link to="/all">Map</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/all">More</Link>
                            </div>
                            
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="SearchPage_option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                        
                    </div>
                    </div>
            </div>   
                     <div className="searchPage_results">
                        <p className="searchPage_resultCount">
                            About 8,880,000 result (0.57) for camel coder 
                        </p>
                        <div className="searchPage_result">
                            <a href="" className="searchPage_resultLink">
                                <img src="https://avatars.githubusercontent.com/u/69110542?v=4"  className="searchPage_resultImage"/>
                                github.com
                            </a>
                            <a href="" className="searchPage_resultTitle">
                                <h2>Camel Coder</h2>

                            </a>
                            <p className="search_resultDescription">camel-cdr has 13 available.Follow their code on Github.</p>
                        </div>
                     </div>
        </div>                

    )
}
export default SearchPage