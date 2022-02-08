import React from "react";
import Card from "./Card";
import emilyPhoto from "../../Assets/images/image-emily.jpg"
import jenniePhoto from "../../Assets/images/image-jennie.jpg"
import thomasPhoto from "../../Assets/images/image-thomas.jpg"

const Testimonial = () => {

  var emilyInfo = {
    image: { emilyPhoto },
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    work: "Marketing Director"
  }

  var jennieInfo = {
    image: "../../images/image-jennie.jpg",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. </br> Highly recommended!",
    name: "Emily R.",
    work: "Marketing Director"
  }

  var thomasInfo = {
    image: "../../images/image-thomas.jpg",
    text: "Sunnyside's enthusiasm coupled with their keen interest in our bran's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    work: "Chief Operating Officer"
  }

  return (
    <div id="testimonial">
      <h2>Client Testimonials</h2>
      <div className="t_container">
        <Card
          image={emilyPhoto}
          text={emilyInfo.text}
          name={emilyInfo.name}
          work={emilyInfo.work} />
        <Card
          image={thomasPhoto}
          text={thomasInfo.text}
          name={thomasInfo.name}
          work={thomasInfo.work} />
        <Card
          image={jenniePhoto}
          text={jennieInfo.text}
          name={jennieInfo.name}
          work={jennieInfo.work} />

      </div>
    </div>
  )
};

export default Testimonial;
