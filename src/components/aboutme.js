import React from 'react'
import think from './assets/images/think.png'
import './styles/aboutme.css'

const aboutme = () => {
    return (
        <section className='section-2'>
            <h1 className='iknow'>Things I Know</h1>
            <div className="container-2">
                <div className="image-cont">
                    <img src={think} alt="" />
                </div>

                <div className="text-2">
                    <p>Attending a Full Stack Coding Camp at Michigan State University, my graduation date is January 19th, 2022. The Coding Camp covers:</p>
                        <p>-HTML5
                        -CSS3
                        -JavaScript
                        -Express.Js
                        -jQuery
                        -Node.Js
                        -Database Theory
                        -MongoDB
                        -MySQL
                        -React
                        Few of the Frameworks I have used:
                        -Bootstrap
                        -WordPress
                        -Materialize</p>
                    
                </div>
            </div>
        </section>
    )
}

export default aboutme
