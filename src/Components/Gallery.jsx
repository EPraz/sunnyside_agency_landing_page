import React, { useEffect, useState } from 'react';
// Desktop Images
import milk_desktop from '../Assets/images/desktop/image-gallery-milkbottles.jpg'
import orange_desktop from '../Assets/images/desktop/image-gallery-orange.jpg'
import cone_desktop from '../Assets/images/desktop/image-gallery-cone.jpg'
import sugarcubes_desktop from '../Assets/images/desktop/image-gallery-sugarcubes.jpg'
// Mobile Images
import milk_mobile from '../Assets/images/mobile/image-gallery-milkbottles.jpg'
import orange_mobile from '../Assets/images/mobile/image-gallery-orange.jpg'
import cone_mobile from '../Assets/images/mobile/image-gallery-cone.jpg'
import sugarcubes_mobile from '../Assets/images/mobile/image-gallery-sugar-cubes.jpg'
import useMediaQuery from '../Hooks/useMediaQuery';

const Gallery = () => {

  const isMobile = useMediaQuery('(max-width: 767px');
  // console.log(isMobile)

  return (
    <div id='gallery'>
      <div className="g_container">
        <div className='g_image'>
          <img src={isMobile ? milk_mobile : milk_desktop} alt={isMobile ? 'milk_mobile' : 'milk_desktop'} />
        </div>
        <div className='g_image'>
          <img src={isMobile ? orange_mobile : orange_desktop} alt={isMobile ? 'orange_mobile' : 'orange_desktop'} />
        </div>
        <div className='g_image'>
          <img src={isMobile ? cone_mobile : cone_desktop} alt={isMobile ? 'cone_mobile' : 'cone_desktop'} />
        </div>
        <div className='g_image'>
          <img src={isMobile ? sugarcubes_mobile : sugarcubes_desktop} alt={isMobile ? 'sugarcubes_mobile' : 'sugarcubes_desktop'} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

