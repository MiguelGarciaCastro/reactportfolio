import React from 'react'
import './styles/Projects.css'
import scaryspirits from './assets/images/scaryspirits.jpg'
import midogapp from './assets/images/midogapp.png'
import redux from './assets/images/redux.png'
import onlyplants from './assets/images/onlyplants.png'
import  books from './assets/images/books.png'
import port from './assets/images/port.png'


const projects = () => {
    return (
        <section className='project'>
            <h1>My Projects</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={scaryspirits} alt="" />
                    <p>Scary Spirits</p>
                    <p><a href="https://github.com/MiguelGarciaCastro/scary_spirits">https://github.com/MiguelGarciaCastro/scary_spirits</a></p>
                    <h5>We have created the ultimate drink webpage for all your thirst needs. In this page you will be able to search your favorite drink, discover new drinks, or learn how to make one. This exciting information will send you running back for more advice and elite instruction for your new party cocktails. To say the least our AI will really rock your screens!</h5>
                </div>

                <div className="cart">
                    <img src={midogapp} alt="" />
                    <p>MiDogApp</p>
                    <p><a href="https://github.com/MiguelGarciaCastro/MiDoggApp">https://github.com/MiguelGarciaCastro/MiDoggApp</a></p>
                    <h5>With MiDogApp, Michiganders can login and share experiences or explore other dog-friendly adventures on our community blog so they’re always connected with other dogs and their humans.</h5>
                </div>

                <div className="cart">
                    <img src={redux} alt="" />
                    <p>Redux Store</p>
                    <p><a href="https://reduxstoree.herokuapp.com/">https://reduxstoree.herokuapp.com/</a></p>
                    <h5>This project is a full stack web application using the MERN Stack to create an e-commerce website using React and Redux with Stripe payments. Users will be able to checkout when there is lost of connection and view their order history out of checkout. Users will also be able to sign up and login in to their account.</h5>
                </div>
                <div className="cart">
                    <img src={onlyplants} alt="" />
                    <p>onlyplants</p>
                    <p><a href="https://github.com/sarahmaskill/only-plants">https://github.com/sarahmaskill/only-plants</a></p>
                    <h5>Our goal with our application was to create a community centered around helping one another become better plant parents by sharing ideas via posts. A secondary goal was to allow the end user to add plants to their own garden to help manage and organize all of their plants in one space where they can give them fun unique names and indicate how frequently each individual plant needs to be watered!</h5>
                </div>
                <div className="cart">
                    <img src={books} alt="" />
                    <p>Book Search Engine</p>
                    <p><a href="https://booksearchengine77.herokuapp.com/">https://booksearchengine77.herokuapp.com/</a></p>
                    <h5>First when user visits the page, he/she can search a book which will then return a list of books available in google. Then user will be given option to save the book or if book is already saved the button text will change to 'Book already saved' Then when user saves the books they can visit 'See your Books' tab to get the list of saved books. From here user can delete the book from the list.</h5>
                </div>
                <div className="cart">
                    <img src={port} alt="" />
                    <p>Portfolio</p>
                    <p><a href="https://miguelgarciacastro.github.io/Portfolio_Advance/">https://miguelgarciacastro.github.io/Portfolio_Advance/</a></p>
                    <h5>Html, CSS, Javascript Portfolio.</h5>
                </div>
            </div>
        </section>
    )
}

export default projects
