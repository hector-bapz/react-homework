import React from "react";
import "./Card.css";

export const Card = (props) => {
  const { name, age, city, followers, likes, qtyPhotos, profilePhoto } = props;
  return (
    <main className="main">
      <div className="card">
        <section className="banner"></section>
        <div>
          <img src={profilePhoto} className="img"></img>
        </div>
        <div className="body">
          <section className="userData">
            <p>
              <span>{name} </span>
              <span>{age}</span>
            </p>
            <p>{city}</p>
          </section>
          <section className="userStats">
            <div className="userStatsData">
              <p>{followers} K</p>
              <p>Followers</p>
            </div>
            <div className="userStatsData">
              <p>{likes} K</p>
              <p>Likes</p>
            </div>
            <div className="userStatsData">
              <p>{qtyPhotos}K</p>
              <p>Photos</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
