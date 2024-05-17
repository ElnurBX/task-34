import React from 'react'
import { Link } from 'react-router-dom'
import './bannersec.scss'
const Bannersec = () => {
    return (
    <section className="bannersec"> 
    <div className="container">
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                       <div className="col-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 text-left ">
                                <div class="banner_text_iner">
                                    <h1 className='display-1 fw-bold'>Wood &amp; ClothSofa</h1>
                                    <p className='lead mt-4 mb-4'>Incididunt ut labore et dolore magna aliqua quis ipsumsuspendisse ultrices gravida. Risus commodo viverra</p>
                                    <Link to={"/"} class="btn btn-danger">buy now</Link>
                                </div>
                            </div>
                            <div className="col-8 d-none d-md-block ">
                                <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                       </div>
                    </div>
                    
                    <div class="carousel-item ">
                       <div className="col-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 text-left ">
                                <div class="banner_text_iner">
                                    <h1 className='display-1 fw-bold'>Wood &amp; ClothSofa</h1>
                                    <p className='lead mt-4 mb-4'>Incididunt ut labore et dolore magna aliqua quis ipsumsuspendisse ultrices gravida. Risus commodo viverra</p>
                                    <Link to={"/"} class="btn btn-danger">buy now</Link>
                                </div>
                            </div>
                            <div className="col-8 d-none d-md-block ">
                                <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                       </div>
                    </div>
                    
                    <div class="carousel-item ">
                       <div className="col-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 text-left ">
                                <div class="banner_text_iner">
                                    <h1 className='display-1 fw-bold'>Wood &amp; ClothSofa</h1>
                                    <p className='lead mt-4 mb-4'>Incididunt ut labore et dolore magna aliqua quis ipsumsuspendisse ultrices gravida. Risus commodo viverra</p>
                                    <Link to={"/"} class="btn btn-danger">buy now</Link>
                                </div>
                            </div>
                            <div className="col-8 d-none d-md-block ">
                                <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="carusel__cont">
                    <button class="" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span  aria-hidden="true">Previous</span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    
                    <button class="" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span  aria-hidden="true">Next</span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    </div>
    </section>
  )
}

export default Bannersec