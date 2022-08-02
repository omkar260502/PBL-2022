import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <>
      <div className="dash">
        <h2>Dashboard </h2>
        <h3>Name : {user.displayName}</h3>
        <h3>Email : {user.email}</h3>
        <button onClick={logoutUser}>Log out</button>
        <br/>
        <a href='http://localhost:3001/'>
        <button>Donate</button>
        </a>
        <br/>
        <br/>
        <section id="about" className="about">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch"
                            data-aos="fade-right">
                            <img src="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Forphan&psig=AOvVaw0W8mC1QLdjMJ4okKVpLjkm&ust=1652370390990000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDEoM7l1_cCFQAAAAAdAAAAABAD" className="img-fluid" alt=""/>
                        </div>

                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                            data-aos="fade-left">
                            <h1><span className="how">How it Works</span></h1>
                            <h3>There are mainly 3 Steps</h3>
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon"><i className="fas fa-file-invoice-dollar"></i></div>
                                <h2 className="title">Getting Details</h2>
                                <p className="description">Firstly, we get the details of Donor and the items to be donated</p>
                            </div>

                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon"><i className="fas fa-gifts"></i></div>
                                <h2 className="title">Hosting data on website</h2>
                                <p className="description">Then the data is hosted on website. Where people near you may see it.</p>
                            </div>

                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon"><i className="fas fa-mug-hot"></i></div>
                                <h2 className="title">Colloection the material</h2>
                                <p className="description">As the data is hosted on website, people will contact you and carry your food in behalf of You</p>
                            </div>

                        </div>
                    </div>

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
        <section id="contact" className="contact mt-5">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact</h2>
                    <h3 className="section-subheading text-muted">Subheading</h3>
                </div>

                <div className="row">

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 info">
                                <i className="fas fa-map"></i>
                                <h4>Address</h4>
                                <p>D.Y.Patil College of Engineering,<br/>Akurdi, Pune 411033</p>
                            </div>
                            <div className="col-lg-6 info">
                                <i className="fas fa-phone"></i>
                                <h4>Call Us</h4>
                                <p>+91XXXXXXXXXX<br/>+91XXXXXXXXXX</p>
                            </div>
                            <div className="col-lg-6 info">
                                <i className="fas fa-envelope"></i>
                                <h4>Email Us</h4>
                                <p>contact@test.com<br/>test@example.com</p>
                            </div>
                            <div className="col-lg-6 info">
                                <i className="fas fa-clock"></i>
                                <h4>Working Hours</h4>
                                <p>Mon - Fri: 9AM to 5PM<br/>Sunday: 9AM to 1PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form>
                            <div className="form-group">
                                <input placeholder="Your Name" type="text" name="name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input placeholder="Your Email" type="email" className="form-control" name="email"/>
                            </div>
                            <div className="form-group">
                                <input placeholder="Subject" type="text" className="form-control" name="subject"/>
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message" className="form-control" name="message" rows="5"></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-danger rounded-cor">Send Message</button>
                            </div>
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
      </div>
    </>
  );
};

export default Dashboard;
