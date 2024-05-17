import React, { Component } from "react";
import "./CardGallary.css";
// import bkg from "../../components/resources/fly.jpg";
let bkg;
export default class CardGallery extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <div class="seven">
          <h1>Our Gallary</h1>
        </div>
        <div class="bkg-opacity" src={bkg}>
          <section className="section">
            <div className="grid">
              <div className="item item--large">
                <div className="item__details">
                  Unveil the Enchantment - Discover More!
                </div>
              </div>
              <div className="item item--medium">
                <div className="item__details">
                  Unlock the Magic - Explore Further!
                </div>
              </div>
              <div className="item item--medium">
                <div className="item__details">
                  Embark on a Journey - See More Wonders!
                </div>
              </div>
              <div className="item item--large">
                <div className="item__details">Explore beyond the surface!</div>
              </div>
              <div className="item item--full">
                <div className="item__details">Unveil the hidden gems!</div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
