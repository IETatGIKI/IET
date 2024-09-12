import React from 'react'
import images from '../assets/Screenshot 2024-09-12 204044.png'
import image2 from '../assets/png-clipart-red-gear-mechanism-illustration-gear-gold-icon-red-tech-gear-electronics-decorative-removebg-preview.png'
const Body = () => {
    return (
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
                        <img src={images} className="image d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="image image2 d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={images} className="image d-block w-100" alt="..."/>
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
    )
}

export default Body
