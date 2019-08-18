import React from 'react';
import CopyArea from '../CopyArea/CopyArea.js';
import Banner from '../banner.png';
const BannerArea = (props) => {
  return (
    
    <div className="BannerArea">
    {/*
    <div className="Banner Code">
    <h3>'Share on WhatsApp' Banner</h3>
    <a href={props.generateurl()}><img src="https://blog.oppedahl.com/wp-content/uploads/2017/01/whatsapp-share.png" width="140" height="75" title="Share on WhatsApp" alt="Share on WhatsApp"/></a>
    <p>Embed this on your website!</p>
    <textarea
        value={props.bannercode()}
    />
    </div>
    */ }
      <h3>Embeddable Banner</h3>
      <p>Copy the code below to embed a Share on WhatsApp banner on a webpage. </p>
      <CopyArea 
        contents = {props.bannercode}
      />
      <p>This is what the banner will look like:</p>

      {<a href={props.url()}><img class ="banner" src={Banner} alt="Share on WhatsApp. Made with WhatsAppr.com"/></a>}

      
    </div>
    
    );
    }

export default BannerArea;