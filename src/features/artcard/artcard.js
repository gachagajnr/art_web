import React, { useState } from "react";
 
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack"; 
import PropTypes from "prop-types";
import Collapse from "react-bootstrap/Collapse";

import { ThreeDotsVertical } from "react-bootstrap-icons";

function ArtCard({ item }) {
  const [open, setOpen] = useState(false);

  const { name, description,  price } = item;
  return (
    <Container style={{ width: "auto", height: "auto" }}>
      <div className="border-bottom">
        <img
          alt=""
          width="100%"
          height="100%"
          background-size="contain"
          class="rounded-top"
          src="http://3.bp.blogspot.com/_EqZzf-l7OCg/TNmdtcyGBZI/AAAAAAAAAD8/KD5Y23c24go/s1600/homer-simpson-1280x1024.jpg"
        />

        <p class="font-weight-light">{name}</p>
        <Stack direction="horizontal" gap={3}>
          <div className="ms-auto">
            {"KES: "}
            {price}
          </div>
          <ThreeDotsVertical onClick={() => setOpen(!open)} />
        </Stack>

        <Collapse in={open}>
            <p class="font-italic"> {description}</p>
            
        </Collapse>
      </div>
    </Container>
  );
}

ArtCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
   price: PropTypes.number,
};
export default ArtCard;