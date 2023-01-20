import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
// import HomeCarousel from "features/carousel/carousel";
import ArtCard from "features/artcard/artcard";
import { container } from "helpers/framer-motion";
import MasonryGrid from "features/masonrygrid/masonrygrid";

export default function Home() {
  const arts = [
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
    {
      name: "Home",
      description: "The fuck i want done",
      btnName: "Buy",
      price: "359",
    },
  ];
  return (
    <>
      {/* <HomeCarousel /> */}
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="arts d-flex flex-wrap "
          style={{
            gap: "5px 15px",
          }}
        >
          <h3>ArtyLand</h3>
        </motion.div>
        <MasonryGrid>
          {arts?.map((item) => (
            <ArtCard item={item} />
          ))}
        </MasonryGrid>
      </Container>
    </>
  );
}
