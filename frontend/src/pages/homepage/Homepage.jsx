import React from "react";
import "./homepage.css";
import Cardslider from "../../components/cardSlider/cardslider";
import Slider from "../../components/slider/Slider";
import Jel1 from "../../components/resources/1.jpg";
import Jel2 from "../../components/resources/2.jpg";
import Jel3 from "../../components/resources/3.webp";
import bg from "../../components/resources/bg1.jpg";
import expVid from "../../components/resources/expVid1.mp4";
import CardGallery from "../../components/CardGallary/CardGallary";
import { Image } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Clock from "../../components/clock/clock";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="parentPic">
        <div class="bar">
          <span class="bar_content">
            Unlock the magic of our exquisite jewelry collection today! Enjoy
            15% off your first purchase with promo code GEM15. Elevate your
            style with timeless beauty now!
          </span>
        </div>
        <div class="six">
          <h1>
            TOP COLLECTION
            <span>Elevate Your Elegance with Timeless Treasures</span>
          </h1>
        </div>
        <div class="bg-opacity" src={bg}>
          <div>
            <Cardslider />
          </div>
          <br />

          <div className="imageDiv">
            <Image w="30%" objectFit="cover" src={Jel1} alt="error" />
            <Image w="40%" objectFit="cover" src={Jel2} alt="error" />
            <Image w="30%" objectFit="cover" src={Jel3} alt="error" />
          </div>
        </div>
        <div class="ten">
          <h1>Sparkling Deals Await! Don't Miss Out - Time is Ticking!</h1>
          <Clock />
        </div>
        <div>
          <video src={expVid} loop autoPlay muted></video>
        </div>
        <CardGallery />
      </div>
      <Footer />
    </>
  );
}
