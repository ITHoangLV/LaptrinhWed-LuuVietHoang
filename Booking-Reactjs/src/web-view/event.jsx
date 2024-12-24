import React from "react";
import Header from "../share-view/header";
import Footer from "../share-view/footer";
function Event() {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(200,200,200,0.5) 100%), url("http://reviewvilla.vn/wp-content/uploads/2022/04/havana-nha-trang-20-scaled.jpg")`,
          paddingTop: "0",
        }}
      >
        <Header />

        <div
          className="hero-section-title-container"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              marginTop: "100px",
              textAlign: "center",
            }}
          >
            <h3 className="small__title">Họp &amp; Sự kiện</h3>
            <h2>TỔ CHỨC SỰ KIỆN</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Event;
