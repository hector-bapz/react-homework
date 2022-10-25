import React from "react";
import { Card } from "./components/Card";

const user = {
  name: "Victor Crest",
  age: 26,
  city: London,
  followers: 80,
  likes: 803,
  photos: 1.4,
  profilePhoto: "./assets/image-victor.jpg",
};

function App() {
  return (
    <Card
      name={user.name}
      age={user.age}
      city={user.city}
      followers={user.followers}
      likes={user.likes}
      photos={user.photos}
      profilePhoto={user.profilePhoto}
    />
  );
}

export default App;
