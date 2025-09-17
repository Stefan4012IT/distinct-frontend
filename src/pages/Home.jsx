import { useEffect, useRef, useState } from 'react';
import OverlayHole from '../components/OverlayHole';
import Nav from '../components/navs/Nav';

const Home = () => {
const frameRef = useRef(null);

  return (
    <>
        <div className="hero">
            <Nav />
            <OverlayHole targetRef={frameRef} />
            <div className="container">
                <div className="frame" ref={frameRef}>

                    <div class="frame__corner-1">
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
                    </div>
                    <div class="two-lines-horisontal">
                        <div className="horisontal-line-1"></div>
                        <div className="horisontal-line-2"></div>
                    </div>
                    <h1 className="herro-heading">Framework for your business</h1>
                </div>
            </div>
        </div>
    </>
  );
};

export default Home;
