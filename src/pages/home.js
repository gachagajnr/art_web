import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import { container } from "helpers/framer-motion";
import ArtList from "features/art/artList";

export default function Home() {
  return (
    <Container>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center pt-3"
        style={{
          gap: "5px 15px",
        }}
      >
        <h3 className="text-center">ArtyLand</h3>
      </motion.div>
      <ArtList  />
    </Container>
  );
}
