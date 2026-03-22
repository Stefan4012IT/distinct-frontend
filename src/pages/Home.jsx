import { useRef } from 'react';
import Nav from '../components/navs/Nav';
import HomeHeroHeading from '../components/animations/HomeHeroHeading';
import videoSrc from '../assets/videos/11903242_1920_1080_30fps.mp4';

const Home = () => {
  const frameRef = useRef(null);

  return (
    <>
      <div className="hero">
        <Nav />
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          className="hero_video"
        />
        <div className="container">
          <div className="frame" ref={frameRef}>
            {/* <div class="frame__corner-1">
              <h4 className="frame__corner-1--name">Design</h4>
            </div>
            <div class="frame__corner-2">
              <h4 className="frame__corner-2--name">Branding</h4>
            </div>
            <div class="frame__corner-3">
              <h4 className="frame__corner-3--name">Business</h4>
            </div>
            <div className="frame__corner-4">
              <h4 className="frame__corner-4--name">Counsalting</h4>
            </div> */}
            {/* <div class="two-lines-horisontal">
              <div className="horisontal-line-1"></div>
              <div className="horisontal-line-2"></div>
            </div> */}
            <HomeHeroHeading />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
