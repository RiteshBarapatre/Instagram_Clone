import React from "react";
import "../css/Left_side.css";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DraftsIcon from '@mui/icons-material/Drafts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Left_side = () => {
  const leftSide = [
    {
      name: "Home",
      logo: <HomeIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Search",
      logo: <SearchRoundedIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Explore",
      logo: <ExploreRoundedIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Reels",
      logo: <VideoLibraryIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Messages",
      logo: <DraftsIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Notifications",
      logo: <FavoriteBorderIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Create",
      logo: <AddBoxIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "Profile",
      logo: <AccountCircleIcon style={{fontSize : '30px'}}/>,
    },
    {
      name: "More",
      logo: <MenuIcon style={{fontSize : '30px'}}/>,
    },
  ];

  return (
    <>
      <div className="Left_side">
      <div className="Left_side_logo">
        Instagram
      </div>
        <div className="Left_side_Elements">
          {leftSide.map((elem) => {
            return (
              <div className="Left_side_Elements_Element">
                <IconButton style={{color : '#fff'}}>{elem.logo}</IconButton>
                <span className="Left_side_Elements_Element_name">{elem.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Left_side;
