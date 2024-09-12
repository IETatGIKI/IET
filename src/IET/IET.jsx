import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; // Import Link from react-scroll
import image3 from '../assets/img1.png';
import image1 from '../assets/img2.png';
import image2 from '../assets/img3.png';
import images from '../assets/png-clipart-red-gear-mechanism-illustration-gear-gold-icon-red-tech-gear-electronics-decorative-removebg-preview.png'
import '../Components/Navbar.css';
import '../Components/OurMission.css';

const IET = () => {
    const [active, setActive] = useState(null);

    // Handler to set active item based on index
    const handleSetActive = (index) => {
        setActive(index);
    };

    return (
        <body>
            <section>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top w-100">
                        <div>
                            <a className="navbar-brand" href="./Aboutus.jsx">
                                <img className='logo' src={images} alt="Logo" />
                            </a>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse bg-purp navbar-collapse p-2 m-5" id="navbarNav">
                            <ul className="navbar-nav links">
                                <li
                                    className={`nav-item ${active === 0 ? 'active' : ''}`}
                                    onClick={() => handleSetActive(0)}
                                >
                                    <Link
                                        className={`nav-link ${active === 0 ? 'active' : ''}`}
                                        to="about-us"
                                        smooth={true}
                                        duration={500}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item ${active === 1 ? 'active' : ''}`}
                                    onClick={() => handleSetActive(1)}
                                >
                                    <Link
                                        className={`nav-link ${active === 1 ? 'active' : ''}`}
                                        to="our-mission"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Our Mission
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item ${active === 2 ? 'active' : ''}`}
                                    onClick={() => handleSetActive(2)}
                                >
                                    <Link
                                        className={`nav-link ${active === 2 ? 'active' : ''}`}
                                        to="our-vision"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Our Vision
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item ${active === 3 ? 'active' : ''}`}
                                    onClick={() => handleSetActive(3)}
                                >
                                    <Link
                                        className={`nav-link ${active === 3 ? 'active' : ''}`}
                                        to="our-events"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Our Events
                                    </Link>
                                </li>
                                <li
                                    className={`nav-item ${active === 4 ? 'active' : ''}`}
                                    onClick={() => handleSetActive(4)}
                                >
                                    <Link
                                        className={`nav-link ${active === 4 ? 'active' : ''}`}
                                        to="social"
                                        smooth={true}
                                        duration={500}
                                    >
                                        Social
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>

            <section >
                <div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className='animater'>
                            IET
                        </div>
                        <div className="carousel-inner mt-5">
                            <div className="carousel-item active">
                                <img src={image1} className="image d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="image d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="image d-block w-100" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <p id='about-us'></p>
            </section>
            <section >
                <div className='animated'>
                    <div className="text-start mt-5 animated">
                        <h1 className='text-center animated'>ABOUT US</h1>
                        <p className='animated'>The Institution of Engineering And Technology is one of the biggest multidisciplinary proficient designing institution within the world. Our legacy dates back to 1871, and nowadays the IET speaks to the designing calling in things of open concern and helps governments to create the open mindful of designing and innovative issues. The IET motivates to inform and impact the worldwide building community to design distant better and stronger world. As a different domestic over designing and innovation, IET offers information that makes a difference make way better sense of the world in arrange to unravel the challenges that matter. It's why IET is interestingly set to winner designing.
                            IET Stands <section id='our-mission'></section> among the best social orders of GIK Established, Institution of Engineering And Technology has continuously been the pioneer of building greatness. However keeping in see the require of fun and encounter, IET brings to GIKI what no other society considers of: Differences! It is the as it were society that stands to speak to Commerce, Designing and Pharmaceutical as its constitution to GIKI.
            
                        </p>
                    </div>
                </div>
            </section>
            <section >
                <div>
                    <div className="text-start mt-5">
                        <h1 className='text-center' >Our Mission</h1>
                        <p>The essential mission of IET is to act as a contact between an engineering student and the technology-driven world we live in nowadays. We look to empower a dynamic engagement within the designing field over and beyond the involvement of the classroom. Aside from our academic goals, we look to form a comfortable social environment for our individuals to encompass themselves <section id='our-vision'></section> with.</p>
            
                    </div>
                </div>
                
            </section>

            
            <section >
                <div>
                    <div className="text-start mt-5">
                        <h1 className='text-center'>Our Vision</h1>
            
                        <p>To inspire, educate,<section id='our-events'></section> and impact the worldwide designing community, and supporting mechanical development to meet desires of the society. We need to educate students not only about the resources available within but also about the numerous opportunities available outside the scope of academics.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className='mt-5'>
                    <div className="text-start">
                        <h1 className='text-center'>Our Events</h1>
                        <p>The Institution of Engineering and Technology (IET) society hosts two main events: the GIKI Innovation Summit (GIS) and Present Around the World (PATW). The GIS is a platform that showcases innovative ideas and projects, providing a hub for creative minds to come together and share their work. PATW, on the other hand, is a global competition where young engineers and technologists present their research and projects to a global audience, promoting knowledge sharing and collaboration across borders. Both events aim to inspire innovation,
                            creativity, and progress in the field of engineering and technology.</p>
                    </div>

                    <div className="GIS">
                        <div className="text-start">
                            <h1 className="text-start small-heading">1 : GIS</h1>
                            <p>Our national occasion, GIS is IET on Campus research and showcasing GIKI's pride and honor. Students and professionals from all over Pakistan gather to take part in it. The occasion provides a great platform for them to show their ideas, talents, and skills and gain valuable experience. The event highlights the fields of engineering, pharmaceuticals, branding, and trade through various technical and non-technical modules, focusing on entertainment through different social modules.</p>
                        </div>
                    </div>
                    <div className="GIS">
                        <div className="text-start">
                            <h1 className="text-start small-heading">2 : PATW</h1>
                            <p>The Ghulam Ishaq Khan Institute Of Engineering Science And Technology (GIKI) is proud to host the Present Around The World (PATW) competition, organized by the Institution of Engineering And Technology (IET). This esteemed event provides a unique opportunity for GIKI students to showcase their technical expertise, creativity, and presentation skills on a global stage. The PATW competition at GIKI is highly anticipated, attracting talented students from various disciplines who are eager to share their innovative ideas and projects. With a rigorous judging process and a supportive environment, PATW at GIKI fosters healthy competition, encourages collaboration, and recognizes outstanding talent in the field of engineering and technology.</p>
                            <h3>Socials :</h3>
                            <p>The Institution of Engineering and Technology (IET) goes beyond just technical events, also arranging a variety of social activities that cater to the diverse interests of its members. From concerts that strike a chord with music lovers to hiking trips that challenge the adventurous, the IET's social events offer a unique opportunity to unwind and connect with like-minded individuals. Additionally, theme dinners provide a chance to indulge in.</p>
                            <h3>Concert:</h3>
                            <p>IET at GIKI recently arranged a concert that was a huge success. It was a fantastic event where music lovers gathered to enjoy amazing performances. The concert was a great opportunity for students to take a break and have fun with friends.</p>
                            <h3>Theme Dinner:</h3>
                            <p>The theme dinner at GIKI, arranged by IET, was a fun event. There was delicious food and nice music. Everyone had a great time talking and laughing with friends. The event was a great way to unwind and socialize with fellow students and participants.</p>
                            <h3 className='animated'>Hiking:</h3>
                            <p className='animated'>IET took us on a fun hike at GIKI. The scenic views and good company made it a memorable day. They organized it recently, and it was fantastic! Everyone was in high spirits, and we all had a blast.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='social'>
                <h1 className='text-center mt-5'>SOCIALS</h1>
                <p className='text-center'>Vist our social media pages for more information and get regular updates</p>
                <h3 className='a'><i class="fa-brands fa-instagram"></i> : <a href="https://www.instagram.com/iet.gik/">visit</a></h3>
                <h3 className='a'><i class="fa-brands fa-facebook"> : </i> <a href="https://www.facebook.com/iet.giki">visit</a></h3>
            </section>
        </body>
    );
}

export default IET;
