import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase.js";
import { Button, nav } from 'react-bootstrap';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
        subject: subject,
        phone: phone
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setPhone("");
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" id="mainNav">
        <a className="navbar-brand"><span className="logo">
                Succor Orpho
            </span></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
            aria-label="Toggle navigation">Menu
            <i className="fas fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="../">Home</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="../donate/index.html">Donate</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../aboutus/index.html">About Us</a>
                </li>
                

                <li className="nav-item">
                    <a className="nav-link" href="../ProgramPgSuccorOrpho/program.html">Program</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../contact us/index.html">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="http://localhost:1234">Carry Food</a>
                </li>
            </ul>
        </div>
    </nav>
    

    <header className="hero">
        <div className="container">
            <div className="hero-heading text-uppercase">
                Contact us
            </div>
        </div>
    </header>

    <br/>
    <figure className="text-center">
        <blockquote className="blockquote">
            <p><b><i>Being an orphan doesn’t mean they don’t have needs and feelings. Losing parents doesn’t mean they lost being humans. <br/>They are still people – just orphans.</i></b></p>
        </blockquote>
        <figcaption className="blockquote-footer">
            Succor Orpho Foundation is headquartered in Akurdi, Pimpri Chinchwad. Simply fill the form below and contact
            us to play your part in improving the lives of orphans around the world.
        </figcaption>
    </figure>
    
    <br/>

    
<div className="abc">

    
    <section className="form-section">
        <div className="container">
            <div className="row">
                
                <div className="col-md-6">
                    <form action="">
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <br/>
                                <input placeholder="Name" type="text" classname="form-control" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input placeholder="Phone" type="tel" classname="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>

                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input placeholder="Email" type="text" classname="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group col-md-12">
                                <input placeholder="Subject" type="text" classname="form-control"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <textarea classname="form-control" rows="5"
                             placeholder="Message"
                            value={message}
                             onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12 text-center">
                                {/* <button type="submit" className="btn btn-primary"> */}
                                    <button
        type="submit" className="btn btn-primary"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        onClick={(e)=>handleSubmit(e)}
      >
        Submit
      </button>
                            </div>
                        </div>

                    </form>
                </div>
                

                
                <div className="address col-md-6">
                    <br/>
                    <h4>Call Us / Whatsapp</h4>
                    <p>
                        <a href="tel:+919096362517">
                            <i className="fas fa-phone"></i>
                            +(91) 9096362517
                        </a>
                        <br/>
                    </p>

                    <h4>Email</h4>
                    <p>
                        <a href="succororpho@gmail.com">
                            <i className="fas fa-envelope"></i>
                            succororpho@gmail.com
                        </a>
                        <br/>
                    </p>

                    <h4>Working Hours</h4>
                    <p>
                        Mon - Fri : 9am - 6pm (IST)
                    </p>

                    <h4>Address</h4>
                    <p>
                        DYPCOE Sector 29, Nigdi Pradhikaran, Pimpri-Chinchwad,<br/> near Akurdi Railway Station, Pune, Maharashtra 411044
                    </p>
                    
                </div>

            </div>
             
        </div>
    </section>
</div>
    
    <br/><br/>

    <section>
        <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560.853468997336!2d73.75481814284869!3d18.644837189248705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f1ca8dab03%3A0x6237cfbd36f9acf9!2sD.Y.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1645957831146!5m2!1sen!2sin" width="100%" height="400px" frameborder="0" style={{border:0}}></iframe>
        </div>
    </section>
    <section className="signup-section mt-5" id="signup">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto text-center">
                    <h2 className="text-dark mb-5">Subscribe to receive updates!</h2>
                    <form className="form-inline d-flex">
                        <input className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" type="email"
                            placeholder="Enter email address..."/>
                        <button className="btn btn-danger mx-auto" type="submit">
                            Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    

    
    <footer className="mt-5" id="footer">
        <div className="container d-md-flex py-4">
            <div className="mr-md-auto text-center text-md-left">
                <div className="copyright">
                    &copy; Copyright <strong><span>Succor Orpho</span></strong>. All Rights Reserved
                </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <ul className="social">
                    <li className="list-item">
                        <a className="list-link" href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="list-link" href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="list-link" href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="list-item">
                        <a className="list-link" href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Contact;