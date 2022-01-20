import React from 'react'
import me from './assets/images/me.jpg'
import './styles/Section.css'


const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="texts">
                    <h1>Hello My Name is Miguel Garcia</h1>
                    
                    <h5> I started with a college coding class then I tried a coding bootcamp, still learning react!</h5>
                    <br></br>
                    <h5>My 6 nephews keep me entertained when im not coding, also love sports and traveling.</h5>
                    
                    <div className="info">
                        <br></br>
                    <h2>Contact info</h2>
                    <h3>Email Me at garciamigue7700@yahoo.com</h3>
                    <h4>Click Here <a href="https://github.com/MiguelGarciaCastro">My github</a></h4>
                    <h4>Click Here<a href="https://www.linkedin.com/in/miguel-garcia-castro-a89186ab/">My Linkedin</a></h4>
                </div>
                </div>
               

                <div className="image">
                    <img src={me} alt="" />
                </div>
               
            </div>
        </section>
    )
}

export default Section
