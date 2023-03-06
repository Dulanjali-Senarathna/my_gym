import React from 'react';
import  Icon  from 'react-remixicon';
import heroImg from '../../assets/img/gym-02.png'
import heartPulse from '../../assets/img/heart-pulse-line.svg'
import location from '../../assets/img/map-pin-fill.svg'
import logo from '../../assets/img/dumble.png';
import '../../styles/hero.css'

const Hero = () => {
  return <section>
    <div className="container">
        <div className="hero__wrapper">

            {/* hero content */}
            <div className="hero__content">
                <h2 className='section__titile'>Exercise is the key to a <span className='highlights'>Healthy</span> Lifestyle</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Quisquam soluta consectetur repudiandae animi, quod voluptate!</p>
                
                <div className="hero__btns">
                    <button className="register__btn">Get Started</button>
                    <button className="watch__btn">
                        <span><Icon  name="play" type="line" size="1x" /></span>
                        Watch Video
                    </button>
                </div>
            </div>

            {/* hero image */}
            <div className="hero__img">
                <div className="hero__img-wrapper">
                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box__img">
                                    <img src={heroImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heart__rate">
                        <h5>Heart Rate</h5>
                        <span><img className='imgh' src={heartPulse} alt=""/></span>
                        <h5>2567 BPM</h5>
                    </div>

                    <div className="gym__location">
                        <span><img src={location} alt="" /></span>
                        <h5>Find a new <br /> gym near you</h5>
                    </div>

                    <div className="dumble__icon">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Hero