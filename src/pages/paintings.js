import { useEffect } from "react";
import Container from "react-bootstrap/Container";

import { useDeleteArtQuery } from "features/art/artApi";
import { motion } from "framer-motion";
import { container } from "helpers/framer-motion";

export default function Paintings() {
  // useEffect(() => {
    // Update the document title using the browser API
    const ddd = useDeleteArtQuery(1);
    console.log("jdhfdjfhjd", ddd);
  // });
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
        <h3 className="text-center">Paintings</h3>
      </motion.div>
    </Container>
  );
}
