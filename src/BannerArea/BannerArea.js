import React from 'react';
import CopyArea from '../CopyArea/CopyArea.js';
import Banner from '../banner.png';
const BannerArea = (props) => {
  return (
    <div className="BannerArea">
      <h3>Embeddable Banner</h3>
      <p>Copy the code below to embed a Share on WhatsApp banner on a webpage. </p>
      <CopyArea 
        contents = {props.bannercode}
      />
      <br/>
      <p>This is what the banner will look like:</p>

      {<a href={props.url()}><img class ="banner" src={Banner} alt="Share on WhatsApp. Made with WhatSharer.com"/></a>}

      
    </div>
    
    );
    }

export default BannerArea;