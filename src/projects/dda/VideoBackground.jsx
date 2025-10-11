import React from 'react';
import AISamplingLogo from "../../assets/AI-Sampling.svg"
export default function VideoBackground({ children,isVideo=true,bgFullLink }) {
  const VIDEO_SRC =
  'https://player.vimeo.com/video/1126221661?h=29587f9209&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0';
  return (
    <>

       <div className="video-bg dda-hero" aria-hidden="true" style={{backgroundColor: 'grey'}}>
     {/* <div className="video-bg__media" style={{backgroundImage: `url(${bgFullLink})`,backgroundSize: 'cover'}}></div> */}
           <div className='dda-hero-bg' aria-hidden='true'>
       <iframe
          src={VIDEO_SRC}
 
   
    title="Background video"  referrerPolicy="strict-origin-when-cross-origin"
  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
  style={{ width: '100%', aspectRatio: '16/9', border: 'none' }}
 
        />
      </div>

        {/* Optional dark overlay to improve text contrast */}
         <div className="video-bg__overlay" style={{backgroundImage:'../../assets/AI-Sampling.svg'}} />
      </div>




 {/* <div className='dda-hero d-flex align-items-center justify-content-center min-vh-100 py-5'>
      <div className='dda-hero-bg' aria-hidden='true'>
       <iframe
          src={VIDEO_SRC}
 
    allow="autoplay; fullscreen; picture-in-picture"
    title="Background video"
        />
      </div>

    
    </div> */}
    
    </>
  );
}