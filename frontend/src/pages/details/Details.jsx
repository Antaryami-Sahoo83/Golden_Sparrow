import React, { useContext, useEffect, useState } from "react";
import "./details.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import bigLogo from "../../components/resources/bigLogo.png";
import { Image } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { AppContext } from "../../context";

export default function Details() {
  const token = JSON.parse(localStorage.getItem("token"));
  const id = useParams();
  console.log(id.id);
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  const data = useContext(AppContext);

  const handleCart = async () => {
    if (token) {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BASE_URL}/jewellery/addtocart/${id.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (res.ok) {
          const data = await res.json();
          toast.success("Product Added to Cart !");
          navigate("/addtocart");
        } else {
          const err = await res.json();
          throw new Error(err);
        }
      } catch (error) {
        alert(error.msg);
      }
    } else {
      toast.error("Sign in to Add the Product to the Cart");
      navigate("/signin");
    }
  };

  const getData = () => {
    const odata = data.filter((el) => {
      return el._id === id.id;
    });
    setArr(odata[0]);
  };

  useEffect(() => {
    getData();
  }, [id]);

  console.log(arr);

  return (
    <>
      <Navbar />
      <div>
        <div id="gparent_div">
          <div id="parent_div1">
            <img src={arr.image} alt="Necklase" />
          </div>
          <div id="parent_div2">
            <h3 fontStyle="Bree Serif">{arr.link}</h3>
            <div id="child_div2">
              <div id="child_div21">
                <img
                  src="https://www.caratlane.us/static/version1689846414/frontend/Caratlane/caratlanetheme/en_US/images/delivery-icon.svg"
                  alt="delhiveryImg"
                />
                <span>Free Delevery !!</span>
              </div>
              <div id="child_div3">
                <img
                  src="https://www.caratlane.us/static/version1689846414/frontend/Caratlane/caratlanetheme/en_US/images/return-icon.svg"
                  alt="returnImg"
                />
                <span>30 days return/exchange *T&amp;C Apply</span>
              </div>
            </div>

            <div>
              <p className="cPrice">RS : {arr.value} /-</p>
              {/* <p className="price">Price $1189</p> */}
              <p className="pColor">
                Save additional 10% + Get free diamond pendant on orders of
                $1000 &amp; above. (Use code: SPARKLE). Ends on 29rd July.
              </p>
            </div>
            <div id="child_div4">
              <button className="buttonDiv1" onClick={handleCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="certification">
          <div>
            <h6>
              GOLDENSPARROW ASSURANCE <span>- 100% CERTIFIED</span>
            </h6>
          </div>
          <div>
            {/* <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/tanishq-icon.png"
              alt="tanishq"
            /> */}
            <h6>
              TRUST OF GOLDENSPARROW <span>- 100% CERTIFIED</span>
            </h6>
          </div>
        </div>

        {/* <div className="condition_div">
          <div className="itemsDiv1">
            <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/30days-moneyback.jpg"
              alt="first"
            />
            <span>
              <h5>30 Days Hassle-Free Returns</h5>
              <p>Get 100% refund for returns within 30 days.</p>
            </span>
          </div>
          <div className="itemsDiv1">
            <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/credit-and-financing.png"
              alt="second"
            />
            <span>
              <h5>Credit and Financing</h5>
              <p>
                Jewelry purchases should never be stressful.That's why we offer
                several ways to pay.
              </p>
            </span>
          </div>
          <div className="itemsDiv1">
            <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/certified.png"
              alt="third"
            />
            <span>
              <h5>100% Certified</h5>
              <p>
                Our jewelry always comes with a certificate of authenticity.
              </p>
            </span>
          </div>
          <div className="itemsDiv1">
            <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/certified.png"
              alt="fourth"
            />
            <span>
              <h5>One Year Warranty</h5>
              <p>
                One year warranty against manufacturing defects on all designs.
              </p>
            </span>
          </div>
          <div className="itemsDiv1">
            <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/insured-shipping.png"
              alt="fifth"
            />
            <span>
              <h5>Insured Shipping</h5>
              <p>Insurance covered shipping &amp; reputable courier partner.</p>
            </span>
          </div>
          <div className="itemsDiv1">
            <img
              src="https://cdnss.caratlane.us/e1597c3d-5e7c-4b01-a191-bfcbe1827055/https://cdn.caratlane.us/media/wysiwyg/connect-with-us.png"
              alt="sixth"
            />
            <span>
              <h5>Connect With Us</h5>
              <p>Our jewelry experts can help answer all your questions.</p>
            </span>
          </div>
        </div> */}

        <div className="greetings_div">
          <div>
            <h2>Make it memorable!</h2>
            <h4>
              Write a heartfelt, handwritten message to your loved one and make
              their gift extra special. <br /> We will send your message along
              with your CaratLane Jewelry, <br />
              adding a delightful element of surprise!
            </h4>
            <h4 className="commitment">
              Pure Quality. Perfect Craftsmanship. Pleased Customers.
            </h4>
          </div>
          <div>
            <img
              id="gcard"
              src="https://c4.wallpaperflare.com/wallpaper/614/388/3/golden-gift-wallpaper-preview.jpg"
              alt="greetingss"
            />
          </div>
        </div>

        <div className="call">
          <h3>Need help in choosing the best Jewelry?</h3>
          <h4>
            Drop in your number and we will get in touch to answer any questions
            regarding purchase ?
          </h4>
          <form>
            <label for="mobile">Mobile Number</label>
            <br />
            <input
              type="text"
              data-validate="{'validate-number':true,required:true, 'validate-length':true, 'minlength':10, 'maxlength':10}"
              name="mobile"
            />
            <br />
            <button class="buttonCall">Request Call Back</button>
          </form>
        </div>
        <br />
        <div className="trust">
          <Image src={bigLogo} alt="image" w={"20%"} />
          <h4>
            The highest quality of craftsmanship and innovation, <br /> that
            brings you modern, everyday designs.
          </h4>
          <a href="https://www.caratlane.com/tanishq-caratlane-partnership">
            <button className="knowmore">Know More</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
