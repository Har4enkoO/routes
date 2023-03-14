import React from "react";
import Component from "./component";

const ANAKIN_IMAGE =
  "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/5cc8e25abe35637188b089c6a1b2240c/large.png";

const RAY_IMAGE =
  "https://cdn.images.express.co.uk/img/dynamic/36/590x/Star-Wars-rey-skywalker-1680105.jpg?r=1665307180383";

function Posts() {
  return (
    <div className="App">
      <Component
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 лютого"}
      />
      <Component
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 лютого"}
      />
      <Component
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 лютого"}
      />
      <Component
        author={{
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 лютого"}
      />
    </div>
  );
}

export default Posts;
