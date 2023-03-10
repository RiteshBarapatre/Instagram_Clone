import React from "react";
import "../css/Stories.css";

const Stories = () => {
  const stories = [
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
    {
      img: "https://images.mid-day.com/images/images/2021/jul/dhoni-july-seven_d.jpg",
      name: "M S Dhoni",
    },
    {
      img: "https://nationaltoday.com/wp-content/uploads/2022/04/41-Roman-Reigns.jpg",
      name: "Roman Reigns",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
      name: "Sharukh Khan",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb8e8f4609471349b4bfdbf774",
      name: "Salman Khan",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_.jpg",
      name: "Akshay Kumar",
    },
    {
      img: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/endangered-species-day-1.jpg",
      name: "Panda",
    },
  ];

  return (
    <div className="stories">
        {stories.map((elem) => {

          let curelem = elem.name
          if(curelem.length > 8){
            curelem =  curelem.slice(0,6)
            curelem = curelem + "..."
          }
          
          return (
            <div className="stories__main">
                <div
                className="stories_story"
                style={{ backgroundImage: `url(${elem.img})` }}
              ></div>
              <p>{curelem}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Stories;
