import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel variant="dark" style={{ height: "250px" }}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="http://3.bp.blogspot.com/_EqZzf-l7OCg/TNmdtcyGBZI/AAAAAAAAAD8/KD5Y23c24go/s1600/homer-simpson-1280x1024.jpg"
          alt="First slide"
          height="200px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="http://3.bp.blogspot.com/_EqZzf-l7OCg/TNmdtcyGBZI/AAAAAAAAAD8/KD5Y23c24go/s1600/homer-simpson-1280x1024.jpg"
          alt="Second slide"
          height="200px"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://3.bp.blogspot.com/_EqZzf-l7OCg/TNmdtcyGBZI/AAAAAAAAAD8/KD5Y23c24go/s1600/homer-simpson-1280x1024.jpg"
          alt="Third slide"
          height="200px"
          background-size="contain"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
