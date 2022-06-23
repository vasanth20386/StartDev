import { Galleria } from "primereact/galleria";
import "./Home.scss";
import photoData from "./tweek.jpg";
import photoData_1 from "./1.png";
import photoData_2 from "./s1.png";
import photoData_3 from "./s2.png";
import photoData_4 from "./s3.png";
import photoData_5 from "./s4.png";
import photodata_6 from "./a1.png";
import photoData_7 from "./b1.png";
import photoData_8 from "./b2.png";
import photoData_9 from "./b3.png";
import photoData_10 from "./b4.png";
import photoData_11 from "./2.jpeg";
import photoData_12 from "./11.png";
import photoData_13 from "./4.jpeg";
import photoData_14 from "./12.png";
import photoData_15 from "./13.png";
import photoData_16 from "./15.png";
import photoData_17 from "./16.png";
import photoData_18 from "./d1.png";
import photoData_19 from "./d2.png";
import photoData_20 from "./m1.png";
import photoData_21 from "./e1.png";
import photoData_22 from "./e2.png";
import photoData_23 from "./e3.png";
import photoData_24 from "./e4.png";
// import ImageGallery from 'react-image-gallery';npm
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Footer from "../Footer/Footer";
import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { mediaByIndex } from "../../mediaIndex";
import "./embla.css";

function Home() {
  const itemTemplate = (item) => {
    return (
      <img
        src={photoData}
        onError={(e) =>
          (e.target.src =
            "https://i.picsum.photos/id/989/200/200.jpg?hmac=YmaagsSArKDGDSeyRJ9aYRxKM6KdP49ZGYtyhLHlCcY")
        }
        alt={item.alt}
        style={{ width: "110%", display: "block" }}
      />
    );
  };

  const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span>
      <Button label="Read More" />
    </span>
  );

  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    autoplay.current,
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div style={{ marginTop: "3rem" }}>
      <div className="images-card galleria-demo row">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    <img
                      className="embla__slide__img"
                      src={mediaByIndex(index)}
                      alt="A cool cat."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="images-card row mt-4">
        <div className="col-5">
          <img
            src={photodata_6}
            style={{
              marginLeft: "4rem",
              width: "740px",
              height: "900px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
        </div>
        <div className="col-4 our-goal-div">
          <h2>
            <font face="Montserrat" font size="+200" color="#1B4F72 ">
              Our Goal
            </font>
          </h2>
          <div className="our-goal-div-image">
            <div className="image-with-text">
              <img
                src={photoData_10}
                style={{
                  width: "200px",
                  height: "200px",
                  display: "block",
                  padding: "1rem",
                  borderRadius: "2rem",
                }}
              />
              <h6>
                <font face="Montserrat" font size="+2" color="#1B4F72 ">
                  Trust
                </font>
              </h6>
            </div>
            <div className="image-with-text">
              <img
                src={photoData_8}
                style={{
                  width: "200px",
                  height: "200px",
                  display: "block",
                  padding: "1rem",
                  borderRadius: "2rem",
                }}
              />
              <h6>
                <font face="Montserrat" font size="+2" color="#1B4F72 ">
                  Engage
                </font>
              </h6>
            </div>
          </div>
          <div className="our-goal-div-images">
            <div className="our-goal-div-image">
              <div className="image-with-text">
                <img
                  src={photoData_9}
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
                <h6>
                  <font face="Montserrat" font size="+2" color="#1B4F72 ">
                    Plan
                  </font>
                </h6>
              </div>
              <div className="image-with-text">
                <img
                  src={photoData_7}
                  style={{
                    width: "200px",
                    height: "200px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
                <h6>
                  <font face="Montserrat" font size="+2" color="#1B4F72 ">
                    Build
                  </font>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lets-raise-div">
        <div className="row">
          <div
            className="col-5 lets-raise-div-text"
            style={{ padding: "15rem", backgroundColor: "#D6EAF8" }}
          >
            <h1>
              <font face="Courier New" font size="+200" color="#1B4F72 ">
                Lets Raise Together
              </font>
            </h1>
            <h4>
              <span>&#10003; </span> Raise funding <br></br>
              <span>&#10003; </span> Invest in startups <br></br>
              <span>&#10003; </span> Secure Transparent Technology platform{" "}
            </h4>

            <div className="two-buttons mt-8">
              <Button
                className="mr-4"
                label="Join to Raise Funds"
                aria-label="Submit"
              />
              <Button label="Join to Invest" aria-label="Submit" />
            </div>
          </div>
          <div
            className="col-6 our-goal-div"
            style={{ marginTop: "0rem", backgroundColor: "#D6EAF8" }}
          >
            <div className="our-goal-div-image">
              <div className="image-with-text">
                <img
                  src={photoData_15}
                  style={{
                    width: "350px",
                    height: "350px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
              </div>
              <div className="image-with-text">
                <img
                  src={photoData_14}
                  style={{
                    width: "350px",
                    height: "350px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
              </div>
            </div>

            <div className="our-goal-div-image">
              <div className="image-with-text">
                <img
                  src={photoData_16}
                  style={{
                    width: "350px",
                    height: "350px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
              </div>
            </div>

            <div className="our-goal-div-image">
              <div className="image-with-text">
                <img
                  src={photoData_13}
                  style={{
                    width: "350px",
                    height: "350px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
              </div>
              <div className="image-with-text">
                <img
                  src={photoData_17}
                  style={{
                    width: "350px",
                    height: "350px",
                    display: "block",
                    padding: "1rem",
                    borderRadius: "2rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="analysis">
        <h1>
          <b>
            Early Stage Platform for startup investing- trusted by founders and
            investors{" "}
          </b>
        </h1>

        <div
          className="analysis-images"
          style={{ marginTop: "2rem", marginBottom: "5rem" }}
        >
          <img
            src={photoData_3}
            style={{
              width: "300px",
              height: "250px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
          <img
            src={photoData_4}
            style={{
              width: "300px",
              height: "250px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
          <img
            src={photoData_2}
            style={{
              width: "300px",
              height: "250px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
          <img
            src={photoData_5}
            style={{
              width: "300px",
              height: "250px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
        </div>
        <div className="analysis-images mt-4" style={{ marginTop: "5rem" }}>
          <img
            src={photoData_1}
            style={{
              width: "400px",
              height: "400px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
          <img
            src={photoData_19}
            style={{
              width: "400px",
              height: "400px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
          <img
            src={photoData_18}
            style={{
              width: "400px",
              height: "400px",
              display: "block",
              borderRadius: "2rem",
            }}
          />
        </div>
      </div>

      <div className="analysis">
        <h1>Top Accelerators</h1>

        <div className="analysis-images">
          <Card
            className="cards"
            title="Y Combinator"
            style={{ width: "25em" }}
            footer={footer}
            header={header}
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              Y Combinator now funds a new cohort of startups twice a year,
              investing $125k in each startup in exchange for 7% equity. Y
              Combinator works “intensively” with the startup for three months
              leading up to Demo Day when startups present their businesses to
              an invite-only audience. Y Combinator’s tech darling alumns
              include Airbnb, Dropbox, Stripe, and Reddit.
            </p>
          </Card>

          <Card
            className="cards"
            title="TechStars"
            style={{ width: "25em" }}
            footer={footer}
            header={header}
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              Standout companies SendGrid, Outreach, SalesLoft, and ClassPass
              all got their start as members of Techstars accelerators. Founded
              a year after Y Combinator in 2006, Techstars has helped launch
              more than 1,000 companies valued at over $8B in aggregate.
              Techstars contributes $20,000 in return for 6% equity until the
              company raises a priced equity financing of $250k or more. The
              program is three months long and centered around mentorship and
              access to the Techstars network.
            </p>
          </Card>

          <Card
            className="cards"
            title="500 Startups"
            style={{ width: "25em" }}
            footer={footer}
            header={header}
          >
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              500 Startups is the most active early-stage investors in the
              world. According to PitchBook, it is the most active VC globally
              in terms of exits, as well as the most active global VC by deal
              counts. Its Rolodex is impressive: more than 2,400 startups
              invested in across more than 75 countries.
            </p>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
