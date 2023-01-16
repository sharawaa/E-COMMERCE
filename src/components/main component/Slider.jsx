import Carousel from "react-bootstrap/Carousel";
import "../../Style/slider.css";
function UncontrolledExample() {
  return (
    <div className="sliderContainer ">
      <Carousel>
        <Carousel.Item interval={3000} className="firstSlide">
          <img className="firstImage" src="./8 1.png" alt="First slide" />
          <Carousel.Caption>
            <h1 className=" firstH3">Canon</h1>
            <h2 className="firstH2">Camera</h2>
            <section>
              <button className="shopButton">Shop now</button>
              <button className="viewButton">View more</button>
            </section>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img className="firstImage" src="Frame 29.png" alt="First slide" />
          <Carousel.Caption>
            <h1 className=" firstH3">Canon</h1>
            <h2 className="firstH2">Camera</h2>
            <section>
              <button className="shopButton">Shop now</button>
              <button className="viewButton">View more</button>
            </section>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="firstImage"
            src="./Frame 29 (1).png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className=" firstH3">Canon</h1>
            <h2 className="firstH2">Camera</h2>
            <section>
              <button className="shopButton">Shop now</button>
              <button className="viewButton">View more</button>
            </section>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
