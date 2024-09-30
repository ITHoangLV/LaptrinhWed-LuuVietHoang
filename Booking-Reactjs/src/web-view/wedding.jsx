import React from "react";
import Header from "../share-view/header";
import Footer from "../share-view/footer";

function Wedding() {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(200,200,200,0.2) 0%,rgba(200,200,200,0.4) 100%), url("https://premierpearlhotel.com/wp-content/uploads/2022/09/W22_Premier_1-1536x985.jpg")`,
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
            <h2>Lễ Cưới</h2>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wedding;
