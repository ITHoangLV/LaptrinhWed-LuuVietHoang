import React from "react";
import Header from "../share-view/header";
import Footer from "../share-view/footer";

function Meeting() {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%,rgba(1,1,1,1) 100%), url("https://rosamiahotel.com/FileUpload/Images/lavanda_min_2.jpg")`,
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
              color:"white",
            }}
          >
            
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Meeting;
