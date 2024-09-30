import React from 'react';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';
import ProductsSection from '../ProductsSection';
import AboutSection from '../AboutSection';
function Home() {
  return (
    <div>
      <Header />
      <section>
        <div className="banner">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="public/img/1.png"
                  alt="First slide"
                  style={{objectFit:"cover"}}
                  height="550"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="public/img/2.png"
                  alt="Second slide"
                  style={{objectFit:"cover"}}
                  height="550"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <hr className="m-0" />
      </div>

      <ProductsSection />
      <AboutSection />
      <Footer/>
    </div>
  );
}

export default Home;
