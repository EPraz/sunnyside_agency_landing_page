import React from 'react';
import Card from './Card';
import egg_image from '../../images/desktop/image-transform.jpg'
import pink_cup from '../../images/desktop/image-stand-out.jpg'
import graphic_design_image from '../../images/desktop/image-graphic-design.jpg'
import photografy_image from '../../images/desktop/image-photography.jpg'

const Main = () => {
  return (
    <div id="main">
      <div className="m_container">
        <Card
          title="Transform your brand"
          text="We are a full-sevice creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          link_text="Learn More" />
        <Card bgImage={egg_image} />
        <Card bgImage={pink_cup} />
        <Card
          title="Stand out to the right audience"
          text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
          link_text="Learn More"
        />
        <Card
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potencial clients' attention."
          bgImage={graphic_design_image}
          mixedCard={true}
          color="cyan"
        />
        <Card
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          bgImage={photografy_image}
          mixedCard={true}
          color="blue"
        />

      </div>
    </div>
  );
};

export default Main;
