import React from "react";
import { Card } from "antd";
import "./index.css";
const { Meta } = Card;

const MainSection = ({ kinolar, mini, setMini }) => {
  return (
    <div
      className="home-wrapper"
      style={{ marginLeft: `${!mini ? "80px" : "262px"}` }}
    >
      {kinolar.map((kino, index) => (
        <Card
          key={index}
          className="card"
          style={{
            width: 300,
          }}
          cover={<img className="cardImg" alt={kino.title} src={kino.image} />}
          actions={[
            <span>{kino.views}</span>,
            <span>{kino.price}</span>,
            <span>{kino.duration}</span>,
          ]}
        >
          <Meta className="title" title={kino.title} description={kino.desc} />
        </Card>
      ))}
    </div>
  );
};

export default MainSection;
