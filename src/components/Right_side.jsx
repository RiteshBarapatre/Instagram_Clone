import React from "react";
import "../css/Right_side.css";

const Right_side = () => {
  const suggestedUser = [
    {
      img: "images/Profile.jpg",
      name: "Ritesh Barapatre",
    },
    {
      img: "https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      name: "Leionel Messi",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      name: "Cristano Ronaldo",
    },
    {
      img: "https://images.news18.com/ibnlive/uploads/2022/04/virat-kohli-ipl-2022.jpg",
      name: "Virat Kohli",
    },
  ];

  return (
    <div className="Right_side">
      <div className="right__header">
        <div
          className="right__userImage"
          style={{ backgroundImage: "url(images/Profile.jpg)" }}
        ></div>
        <div className="right__userInfo">
          <p>barapatre.ritesh</p>
          <p className="right__userInfoName">Ritesh Barapatre</p>
        </div>
        <p className="right__userInfoSwitch">switch</p>
      </div>
      <div className="right__suggestion">
        <p>Suggetion for you</p>
        <p className="right__seeAll">See All</p>
      </div>
      {suggestedUser.map((elem) => {
        return (
          <div className="right__suggestionUser">
            <div
              className="right__suggestionUserAvatar"
              style={{ backgroundImage: `url(${elem.img})` }}
            ></div>
            <div className="right__suggestionUserInfo">
              <p style={{ fontSize: "14px" }}>{elem.name}</p>
              <p className="right__suggestionUserName">
                Followed by barapatre.ritesh + 8 more
              </p>
            </div>
            <p className="right__suggestionUserFollow">Follow</p>
          </div>
        );
      })}
      <div className="right__footer">
        <p>
          <span> About</span> · 
          <span> Help</span> · 
          <span> Press</span> · 
          <span> API</span> · 
          <span> Jobs</span> · 
          <span> Privacy</span> · 
          <span> Terms</span> · 
          <span> Locations</span> · 
          <span> Language</span> · 
          <span> Meta Verified</span> · 
        </p>
      </div>
      <div className="fromMeta">
      © 2023 INSTAGRAM FROM META
      </div>
    </div>
  );
};

export default Right_side;
