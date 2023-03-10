import React, { useState } from "react";
import "../css/post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Post = () => {
  const posts = [
    {
      img: "images/Profile.jpg",
      name: "Ritesh Barapatre",
      post: "images/Profile.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      name: "Leionel Messi",
      post: "https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      name: "Cristano Ronaldo",
      post: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://images.news18.com/ibnlive/uploads/2022/04/virat-kohli-ipl-2022.jpg",
      name: "Virat Kohli",
      post: "https://images.news18.com/ibnlive/uploads/2022/04/virat-kohli-ipl-2022.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://images.mid-day.com/images/images/2021/jul/dhoni-july-seven_d.jpg",
      name: "M S Dhoni",
      post: "https://images.mid-day.com/images/images/2021/jul/dhoni-july-seven_d.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://nationaltoday.com/wp-content/uploads/2022/04/41-Roman-Reigns.jpg",
      name: "Roman Reigns",
      post: "https://nationaltoday.com/wp-content/uploads/2022/04/41-Roman-Reigns.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
      name: "Sharukh Khan",
      post: "https://m.media-amazon.com/images/M/MV5BZDk1ZmU0NGYtMzQ2Yi00N2NjLTkyNWEtZWE2NTU4NTJiZGUzXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://i.scdn.co/image/ab6761610000e5eb8e8f4609471349b4bfdbf774",
      name: "Salman Khan",
      post: "https://i.scdn.co/image/ab6761610000e5eb8e8f4609471349b4bfdbf774",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_.jpg",
      name: "Akshay Kumar",
      post: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
    {
      img: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/endangered-species-day-1.jpg",
      name: "Panda",
      post: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/endangered-species-day-1.jpg",
      caption:
        "This is my photo I am looking cool 😎 and i am cool because i am big fan of naruto and this is the biggest project of mine naruto is living in japan",
    },
  ];

  const [caption, setCaption] = useState(false);

  const showFullCaption = () => {
    if (caption) {
      setCaption(false);
    } else {
      setCaption(true);
    }
  };

  return (
    <div className="post">
      {posts.map((elem) => {
        let curCaption = elem.caption;
        if (curCaption.length > 30) {
          curCaption = curCaption.slice(0, 90);
          curCaption = curCaption;
        }

        return (
          <>
            <div className="post__header">
              <div
                className="post__headerAvatar"
                style={{ backgroundImage: `url(${elem.img})` }}
              ></div>
              <div className="post__user">
                <p>{elem.name}</p>
              </div>
            </div>
            <div
              className="post__post"
              style={{ backgroundImage: `url(${elem.post})` }}
            ></div>
            <div className="post__likes">
              <FavoriteBorderIcon className="post__likesIcons" />
              <ChatBubbleOutlineIcon className="post__likesIcons" />
              <SendIcon className="post__likesIcons" />
              <BookmarkBorderIcon
                className="post__likesIcons"
                style={{ marginLeft: "auto"}}
              />
            </div>
            <div className="post__likedBy">
              <p>
                Liked by <b>barapatre.ritesh </b> and <b>others</b>
              </p>
            </div>
            <div className="post__caption">
              <p>
                <b>{elem.name} </b>
                {caption ? elem.caption : curCaption}
                <span
                  style={{ color: "grey", cursor: "pointer" }}
                  onClick={showFullCaption}
                >
                  {caption ? "...less" : "...more"}
                </span>
              </p>
            </div>
            <div className="post__comments">
              <p className="post__allComments">View all comments</p>
              <b>{elem.name} </b> This is my comment Looking very nice men
            </div>
            <div className="post__inputs">
            <input type="text" name="" id="" className="post__inputComment" placeholder="Add a Comment..."/>
            <SentimentSatisfiedAltIcon fontSize="small" className="post__commentEmoji"/>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Post;
