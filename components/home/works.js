import images from "./loadImage";
import './works.css'

export default function Works() {
    return (
        <div className='works' id="works">
            <div className="container">
                <div className="row scroll">
                    <img src='assets/scroll.webp' className='img-fluid' alt="" />
                </div>
                <div className="row text-center pb-5">
                    <h2>Works</h2>
                    <p>I had the pleasure of working with these awesome projects</p>
                </div>
                <div className="row">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {
                                images.map((data, index) =>
                                    index === 0 ? <div key={index} className="carousel-item text-center active">
                                        <a href={data.url} target='_blank' rel="noopener noreferrer" className='text-light'>View Website</a>
                                        <br />
                                        <img src={data.img} className="img-fluid project-image" alt={`Project ${index + 1}`} />
                                    </div> : <div key={index} className="carousel-item text-center">
                                        <a href={data.url} target='_blank' rel="noopener noreferrer" className='text-light'>View Website</a>
                                        <br />
                                        <img src={data.img} className="img-fluid project-image" alt={`Project ${index + 1}`} />
                                    </div>
                                )
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" aria-label="Previous">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" aria-label="Next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}