import React from 'react';
import wallpaper1 from '../components/photo/photo1.jpg'
import wallpaper2 from '../components/photo/demo.jpg'
import wallpaper3 from '../components/photo/photo3.jpg'

const Home = () => {
    return (
        <><div id="carouselExampleCaptions" className="carousel slide" data-interval="100" data-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={wallpaper1} width="1150px;" height="700px;" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h2>Welcome to Vehicle Service system</h2>
                    <p>Different types of Servicing</p>
                    <button type="button" className="btn btn-danger">Interim Service</button>
                    <button type="button" className="btn btn-primary">Full Service</button>
                    <button type="button" className="btn btn-success">Major Service</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={wallpaper2}  width="1150px;" height="700px;" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                <h2>Welcome to Vehicle Servicing system</h2>
                    <p>Different types of Servicing</p>
                    <button type="button" className="btn btn-danger">General Repairs</button>
                    <button type="button" className="btn btn-primary">Oil-change</button>
                    <button type="button" className="btn btn-success">NYS Inspection</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src={wallpaper3} width="1150px;" height="700px;" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                <h2 >Welcome to Vehicle Servicing system</h2>
                    <p>Different types of Servicing</p>
                    <button type="button" className="btn btn-danger">A/C Repairs</button>
                    <button type="button" className="btn btn-primary">Engine Work</button>
                </div>
            </div>
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
   
    </>
        
    )
}
export default Home;