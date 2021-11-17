import React from 'react'
import Button from './Button.svg';
import unsplash_k1xf2D7jWUs from './unsplash_k1xf2D7jWUs.svg';
import './Landing.css';
import POLAD from './POLAD.svg';
import './Landing.css';
import Twitter from './Twitter.png';
import GitHub from './GitHub.png';

const Landing = () => {
    return (
        <div className="container-center-horizontal" mb-34>
            <div className="landing screen">
                <div className="overlap-group2">
                    <div className="rectangle-1">
                        <img className="unsplashk1xf2-d7j-w-us" src={unsplash_k1xf2D7jWUs} alt="" />
                        <img className="polad" src={POLAD} alt="" />
                        <h1 className="text-1">
                            <span className="ptserif-normal-white-120px">Crea</span>
                            <span className="ptserif-normal120px">ted To Serve The</span>
                            <span className="ptserif-normal">Estee</span>
                            <span className="ptserif-normal-120px">med.</span>
                        </h1>
                        <div className="text-2">
                            <span className="span0">Sched</span>
                            <span className="span1">ule with Polad At Affordable Rates</span>
                        </div>
                        <img className="twitter" src={Twitter} alt="" />
                        <img className="git-hub" src={GitHub} alt="" />
                    </div>
                    <img className="button" src={Button} alt="button" />
                </div>
            </div>
        </div>
    );
}





export default Landing
