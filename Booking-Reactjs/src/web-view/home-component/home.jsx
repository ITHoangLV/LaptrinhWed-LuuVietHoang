import Footer from "../../share-view/footer";
import Header from "../../share-view/header";
import AboutSection from "../AboutSection";
import ProductsSection from "../ProductsSection";
function Home() {
  return (
    <div>
      <Header />
      <section>
        <div className="banner">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://dplusvn.com/wp-content/uploads/2020/01/hinh-anh-phong-hop-dep-txd.jpg"
                  alt="First slide"
                  style={{ objectFit: "cover" }}
                  height="550"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://assets.ofs.com/s3fs-public/styles/max_1300x1300/public/2020-01/37_OFB_Chicago_NeoCon2016_Boardroom_Eleven_02.jpg?itok=GMMXUQOg"
                  alt="Second slide"
                  style={{ objectFit: "cover" }}
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
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
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
      <Footer />
    </div>
  );
}

export default Home;
