import React from "react";
import "./HomePage.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function HomePage() {
  return (
    <>
      <div className="homepage-container">
        <div className="slide-container">
            <div className="card-wrapper">

              <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="image-content">
                      <span className="overlay"></span>

                      <div className="card-image">
                        <img
                          src="../src/assets/stellan-johansson-1PP0Fc-KSd4-unsplash.jpg"
                          alt=""
                          className="card-img"
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="title">What Is Telecommunications?</h2>
                      <p className="description">
                      Telecommunications, also known as telecom, is the exchange of information over significant distances by electronic means and refers to all types of voice, data and video transmission. This is a broad term that includes a wide range of information-transmitting technologies and communications infrastructures, such as wired phones; mobile devices, such as cellphones; microwave communications; fiber optics; satellites; radio and television broadcasting; the internet; and telegraphs.
                      </p>

                      {/* <button className="button">View More</button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="image-content">
                      <span className="overlay"></span>

                      <div className="card-image">
                        <img
                          src="../src/assets/chuttersnap-MEDHUqvH0tA-unsplash.jpg"
                          alt=""
                          className="card-img"
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="title">What Is CCTV?</h2>
                      <p className="description">CCTV means “closed-circuit television” and is commonly known as a video surveillance technology. “Closed-circuit” means broadcasts are limited (closed) to a selected group of monitors, unlike “regular” TV, which can be received and viewed by whoever sets up a reception device.</p>


                      {/* <button className="button">View More</button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="image-content">
                      <span className="overlay"></span>

                      <div className="card-image">
                        <img
                          src="../src/assets/nelson-ndongala-XaMOJUvli8U-unsplash.jpg"
                          alt=""
                          className="card-img"
                        />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="title">What Is CATV?</h2>
                      <p className="description">Commonly known as community antenna television (CATV), these cable systems use a “community antenna” to receive broadcast signals (often from communications satellites), which they then retransmit via cables to homes and establishments in the local area subscribing to the service</p>


                      {/* <button className="button">View More</button> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
