import Carousel from "react-bootstrap/Carousel";
import "../../Style/slider.css";
function UncontrolledExample() {
  return (
    <div className="bigSlider">
      <div className="sliderContainer">
        <Carousel>
          <Carousel.Item interval={3000} className="firstSlide">
            <img className="firstImage" src="./Group 8.png" alt="First slide" />
            <Carousel.Caption className="textSlide">
              <section className="title">
                <h1 className=" firstH3">Canon</h1>
                <h2 className="firstH2">Camera</h2>
                <section>
                  <button className="shopButton">Shop now</button>
                  <button className="viewButton">View more</button>
                </section>
              </section>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img className="firstImage" src="Frame 29.png" alt="First slide" />
            <Carousel.Caption className="textSlide">
              <section className="title">
                <h1 className=" firstH3">Bose</h1>
                <h2 className="firstH2">headphones</h2>
                <section>
                  <button className="shopButton">Shop now</button>
                  <button className="viewButton">View more</button>
                </section>
              </section>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <img
              className="firstImage"
              src="./Frame 29 (1).png"
              alt="First slide"
            />
            <Carousel.Caption className="textSlide">
              <section className="title">
                <h1 className=" firstH3">Major</h1>
                <h2 className="firstH2">Gaming console</h2>
                <section>
                  <button className="shopButton">Shop now</button>
                  <button className="viewButton">View more</button>
                </section>
              </section>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default UncontrolledExample;
