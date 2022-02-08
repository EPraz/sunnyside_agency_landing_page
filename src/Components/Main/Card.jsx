import React, { useState } from 'react';

const Card_text = (props) => {

  const [bgColor, setBgColor] = useState(false);
  const [title, setTitle] = useState(false);

  const emptyImageProps = () => {
    if (props.bgImage == "") {
      setBgColor = false;
    }
    else {
      setBgColor = true;
    }
    return bgColor;
  }

  const emptyTextProps = () => {
    if (props.title == "") {
      setTitle = false;
    } else {
      setTitle = true;
    }
    return title;
  }

  return (
    <div className={props.mixedCard ? "card mixed" : "card"}
      style={{ backgroundImage: emptyImageProps ? `url(${props.bgImage})` : "var(--white)" }}>
      <h2 className={props.color ? props.color : ""}>{props.title}</h2>
      <p className={props.color ? props.color : ""}>{props.text}</p>
      <a href="#">{props.link_text}</a>
    </div>
  );
};

export default Card_text;
