import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import { container } from "helpers/framer-motion";
import { useGetArtQuery } from "features/art/artApi";
import ArtDetails from "features/art/artDetails";

export default function ArtDetail() {
  const params = useLocation();
  let _id = params.state.id;
  // const {
  //   data: art,
  //   error,
  //   isLoading,
  //   isSuccess,
  //   isError,
  // } = useGetArtQuery(_id);

  // console.log("the data", data);
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
        <h3 className="text-center">Art Detail</h3>
      </motion.div>
      <ArtDetails _id={_id} />
    </Container>
  );
}
