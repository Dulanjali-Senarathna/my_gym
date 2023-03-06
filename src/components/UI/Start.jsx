import React from 'react';
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'

function Start() {
  return <section>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={trainerImg} alt="" />
            </div>

            <div className="start__content">
                <h2 className="section__title">
                    Ready to make a <span className="highlights">change?</span> 
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Mollitia veniam beatae natus excepturi laboriosam. Repudiandae
                  ea vero quibusdam doloremque sapiente quia? Porro atque dolor,
                   illo tempora dolorem fugiat natus error?</p>
                
                <button className="register__btn">Get Started</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start