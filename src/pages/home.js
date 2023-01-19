import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";
import HomeCarousel from "features/carousel/carousel";
import ArtCard from "features/artcard/artcard";
import { container } from "helpers/framer-motion";
import MasonryGrid from "features/masonrygrid/masonrygrid";

export default function Home() {
  const arts = [
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
    { name: "Home", description: "The fuck i want done", btnName: "Buy" },
  ];
  return (
    <>
      <HomeCarousel />
      <Container className="mt-4">
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
        <div className="wrapper mt-4">
          <MasonryGrid>
            {arts?.map((item) => (
              <ArtCard item={item} />
            ))}
          </MasonryGrid>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          {/* <PaginationCo
          mp totalPages={latestTotalPages} /> */}
          <>Border</>
        </div>
      </Container>
    </>
  );
}
